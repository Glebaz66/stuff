var gulp = require('gulp');
var sass = require('gulp-sass');    
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('sass', function(done){

    gulp.src('sass/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass
      .pipe(gulp.dest('style'))

      done();
  });

// gulp.task('scripts', function(done){

//     gulp.src('javascript/**/*.js')
//         .pipe(concat('scripts.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('javascripts'))

//         done();
// });


gulp.task('watch', function(done){

    // added done above too

    gulp.watch('sass/**/*.scss', gulp.series('sass') )
    // gulp.watch('javascript/**/*.js', gulp.series('scripts') )
    done();
})