var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('jade', function(){
    gulp.src('./src/**/*.jade')//aqui esta nuestro archivo
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./dist'))//aqui tiene que mandar los resultados
})
//para que este alerta a cualquier cambio hecho en mis archivos jade
gulp.task('watch', function(){
    gulp.watch('./src/**/*.jade', ['jade'])
});

gulp.task('default', ['jade', 'watch'])