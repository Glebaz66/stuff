const gulp = require('gulp');
const sass = require('gulp-sass');   
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const copy = require('gulp-copy');

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
    
gulp.task('copy-html', function() {
    return gulp.src('./src/**/*.html')
            .pipe(gulp.dest('dist'))
});

gulp.task('copy-img', function() {
    return gulp.src('./src/images/*')
            .pipe(gulp.dest('dist/images/'))
});

// gulp.task('uglify', function(){
//     gulp.src('./dist/javascripts/index.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/javascripts/'))
//   });

gulp.task('watch', function(done){
    gulp.watch('src/sass/**/*.scss', gulp.series('sass'))
    gulp.watch('src/javascript/**/*.js', gulp.series('scripts'))
    // gulp.watch('src/javascript/**/*.js', gulp.series('uglify'))
    gulp.watch('src/**/*.html', gulp.series('copy-html'))
    gulp.watch('src/images/*', gulp.series('copy-img'))

    done();
})