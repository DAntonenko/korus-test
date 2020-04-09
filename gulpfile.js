const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  return gulp.src('./src/*.+(scss|sass)')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
});

gulp.task('autoprefixer', function () {
  return gulp.src('dist/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'));
});
