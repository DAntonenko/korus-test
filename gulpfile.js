const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const { watch, series } = require('gulp');

gulp.task('sass', function(){
  return gulp.src('./src/*.+(scss|sass)')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
});

gulp.task('autoprefixer', function() {
  return gulp.src('dist/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  watch('./src/*.+(scss|sass)', series(sass, autoprefixer));
});

// exports.default = function() {
//   watch('./src/*.+(scss|sass)', series(sass, autoprefixer));
// };