const less = require('less')
const { readFileSync } = require('fs')
const path = require('path')
const postcss = require('postcss')
const npmImportPlugin = require('less-plugin-npm-import')
const rucksack = require('rucksack-css')
const autoprefixer = require('autoprefixer')

const plugins = [
  rucksack(),
  autoprefixer({
    browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 9', 'iOS >= 8', 'Android >= 4'],
  })
]

module.exports = function transformLess(styleFile, config = {}) {
  const { cwd = process.cwd() } = config
  const resolvedStyleFile = path.resolve(cwd, styleFile)

  let data = readFileSync(resolvedStyleFile, 'utf8')
  data = data.replace(/^\uFEFF/, '')

  const styleOpts = {
    filename: resolvedStyleFile,
    plugins: [new npmImportPlugin({ prefix: '~' })],
    paths: [path.dirname(resolvedStyleFile)],
    javascriptEnabled: true
  }

  return less
    .render(data, styleOpts)
    .then(result => {
      return postcss(plugins).process(result.css, { from: undefined })
    })
    .then(res => res.css)
}