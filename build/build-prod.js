const { getProjectPath, cssInjection } = require("./util/projectHelper");
const transformLess = require("./util/transformLess");

const path = require("path");
const merge2 = require("merge2");
const through2 = require("through2");
const gulp = require("gulp");
const rimraf = require("rimraf");
const destDir = getProjectPath("dist");

function compile() {
  rimraf.sync(destDir);
  const less = gulp
    .src(["../src/**/*.less"])
    .pipe(
      through2.obj(function(file, encoding, next) {
        this.push(file.clone());
        if (file.path.match(/(\/|\\)style(\/|\\)(.*)\.less$/)) {
          transformLess(file.path)
            .then(css => {
              file.contents = Buffer.from(css);
              file.path = file.path.replace(/\.less$/, ".css");
              this.push(file);
              next();
            })
            .catch(e => {
              console.error(e);
            });
        } else {
          next();
        }
      })
    )
    .pipe(gulp.dest(destDir));
  const assets = gulp
    .src(["../assets/**/*.@(png|svg|jpg)"])
    .pipe(gulp.dest(path.join(destDir, "assets")));
  const copyVue = gulp
    .src(["../src/components/**/*.vue"])
    .pipe(gulp.dest(path.join(destDir, "components")));
  const scripts = gulp
    .src(["../src/**/*.js"])
    .pipe(
      through2.obj(function(file, encoding, next) {
        this.push(file.clone());
        if (
          file.path.match(/(\/|\\)style(\/|\\)index\.js/) ||
          file.path.match(/(\/|\\)src(\/|\\)index\.js/)
        ) {
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(cssInjection(content));
          file.path = file.path.replace(/index\.js/, "css.js");
          this.push(file);
          next();
        } else {
          next();
        }
      })
    )
    .pipe(gulp.dest(destDir));
  return merge2([less, assets, copyVue, scripts]);
}

gulp.task("compile", done => {
  console.log("compile less ...");
  compile().on("finish", done);
});

gulp.task('default', ['compile'])