const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const argv = process.argv
const cwd = process.cwd()
let componentDirName = ''
let destDir = ''

function walkDir(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(err)
      return
    }
    files.forEach(filename => {
      const fileDir = path.join(dirPath, filename)
      fs.stat(fileDir, (error, stats) => {
        if (error) {
          console.error(error)
          return
        }
        if (stats.isDirectory()) {
          walkDir(fileDir)
          return
        }
        let relativePath = path.relative(path.join(cwd, 'build', 'template'), fileDir)
        let content = fs.readFileSync(fileDir, 'utf8')
        if (path.extname(relativePath).match(/(\.vue|\.less)$/)) {
          relativePath = relativePath.replace(/index/, argv[2])
        }
        else {
          content = content.replace(/index/g, argv[2])
        }
        const fileDistPath = path.join(destDir, relativePath)
        const dirname = path.dirname(fileDistPath)
        mkdirp.sync(dirname)
        fs.writeFileSync(fileDistPath, content, 'utf8')
      })
    })
  })
}

if (argv && argv.length && argv[2]) {
  componentDirName = argv[2]
  destDir = path.join(cwd, 'src', 'components', componentDirName)
  if (fs.existsSync(destDir)) {
    throw Error('组件已经存在')
  }
  walkDir(path.join(cwd, 'build', 'template'))
}
else {
  throw Error('组件名称未定义')
}