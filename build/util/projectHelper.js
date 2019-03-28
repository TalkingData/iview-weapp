const path = require('path')
const cwd = process.cwd()

function getProjectPath(...filePath) {
  return path.resolve(cwd, '..', ...filePath)
}

function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.less/g, '.css')
}

module.exports = {
  getProjectPath,
  cssInjection
}