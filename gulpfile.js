const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('css', function () {
  var plugins = [
    autoprefixer(),
    cssnano()
  ];
  return gulp.src('src/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('dist'));
});
