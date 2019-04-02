
const { getProjectPath, cssInjection } = require('./util/projectHelper')
const transformLess = require('./util/transformLess')

const path = require('path')
const through2 = require('through2')
const gulp = require('gulp')
const destDir = getProjectPath('dist')
const exampleDestDir = getProjectPath('examples/src')

gulp.task('compile-css', done => {
  return gulp
    .src(['../src/**/*.less'])
    .pipe(
      through2.obj(function (file, encoding, next) {
        this.push(file.clone())
        if (file.path.match(/(\/|\\)style(\/|\\)(.*)\.less$/)) {
          transformLess(file.path)
            .then(css => {
              file.contents = Buffer.from(css)
              file.path = file.path.replace(/\.less$/, '.css')
              this.push(file)
              next()
            })
            .catch(e => {
              console.error(e)
            })
        }
        else {
          next()
        }
      })
    )
    .pipe(gulp.dest(destDir))
    .pipe(gulp.dest(exampleDestDir))
})

gulp.task('compile-js', () => {
  return gulp
    .src(['../src/**/*.js'])
    .pipe(
      through2.obj(function (file, encoding, next) {
        this.push(file.clone())
        if (
          file.path.match(/(\/|\\)style(\/|\\)index\.js/) ||
          file.path.match(/(\/|\\)src(\/|\\)index\.js/)
        ) {
          const content = file.contents.toString(encoding)
          file.contents = Buffer.from(cssInjection(content))
          file.path = file.path.replace(/index\.js/, 'css.js')
          this.push(file)
          next()
        }
        else {
          next()
        }
      })
    )
    .pipe(gulp.dest(destDir))
    .pipe(gulp.dest(exampleDestDir))
})

gulp.task('copy-static', () => {
  return gulp
    .src(['../assets/**/*.@(png|svg|jpg)'])
    .pipe(gulp.dest(path.join(destDir, 'assets')))
    .pipe(gulp.dest(path.join(exampleDestDir, 'assets')))
})

gulp.task('copy-vue', () => {
  return gulp
    .src(['../src/components/**/*.vue'])
    .pipe(gulp.dest(path.join(destDir, 'components')))
    .pipe(gulp.dest(path.join(exampleDestDir, 'components')))
})

gulp.task('auto', () => {
  gulp.watch('../src/**/*.js', ['compile-js'])
  gulp.watch('../assets/**/*.@(png|svg|jpg)', ['copy-static'])
  gulp.watch('../src/components/**/*.vue', ['copy-vue'])
  gulp.watch('../src/**/*.less', ['compile-css'])
})

gulp.task('default', ['compile-css', 'compile-js', 'copy-vue','copy-static', 'auto'])
