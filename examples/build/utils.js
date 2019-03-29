var path = require('path')
var fs = require('fs')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var mpvueInfo = require('../node_modules/mpvue/package.json')
var packageInfo = require('../package.json')
var mkdirp = require('mkdirp')

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  var postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: true
    }
  }

  var px2rpxLoader = {
    loader: 'px2rpx-loader',
    options: {
      baseDpr: 1,
      rpxUnit: 0.5
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader, px2rpxLoader, postcssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    wxss: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

const writeFile = async (filePath, content) => {
  let dir = path.dirname(filePath)
  let exist = fs.existsSync(dir)
  if (!exist) {
    await mkdirp(dir)
  }
  await fs.writeFileSync(filePath, content, 'utf8')
}

exports.writeFrameworkinfo = function () {
  var buildInfo = {
    'toolName': mpvueInfo.name,
    'toolFrameWorkVersion': mpvueInfo.version,
    'toolCliVersion': packageInfo.mpvueTemplateProjectVersion || '',
    'createTime': Date.now()
  }

  var content = JSON.stringify(buildInfo)
  var fileName = '.frameworkinfo'
  var rootDir = path.resolve(__dirname, `../${fileName}`)
  var distDir = path.resolve(config.build.assetsRoot, `./${fileName}`)

  writeFile(rootDir, content)
  writeFile(distDir, content)
}
