var gulp = require('gulp');
var sass = require('gulp-sass');   
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var copy = require('gulp-copy');

gulp.task('sass', function(done){

    gulp.src('src/sass/**/*.scss')
    .pipe(concat('style.css'))
      .pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass
      .pipe(gulp.dest('dist/style'))
      done();
  });

  gulp.task('scripts', function(done){
      gulp.src('src/javascript/**/*.js')
      .pipe(concat('index.js'))
      .pipe(gulp.dest('dist/javascripts/'))
      done();
    });
    
gulp.task('copy', function() {
    return gulp.src('./src/**/*.html')
                .pipe(gulp.dest('dist'))
});

gulp.task('watch', function(done){
    gulp.watch('src/sass/**/*.scss', gulp.series('sass'))
    gulp.watch('src/**/*.html', gulp.series('copy'))
    gulp.watch('src/javascript/**/*.js', gulp.series('scripts'))

    done();
})