var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var juck = require('gulp-nunjucks-render');
var wait = require('gulp-wait');
var min = require('gulp-imagemin');

gulp.task('js', function () {
  gulp.src('./src/js/**/*')
    .pipe(gulp.dest('./web/js'))
});
gulp.task('img', function () {
    gulp.src('./src/images/**/*')
      .pipe(min())
      .pipe(gulp.dest('./web/images'))
  });

gulp.task('juck', function() {
    return gulp.src(['./src/templates/*.html'])
      .pipe(juck({
        path: ['./src/templates']
      }))
      .pipe(gulp.dest('./web'))
  });

gulp.task('reload', function(){
    browserSync.reload()
});

gulp.task('serve', function () {
    browserSync.init({
        server: './web'
    }); 
    gulp.watch('./src/js/main.js', ['js']); 
    gulp.watch('./src/templates/index.html', ['reload']);
    gulp.watch('./src/sass/*.scss',['sass']);
    gulp.watch('./src/templates/components/*.html',['juck']);
    gulp.watch('./src/templates/components/*.html',['reload'])
    
})
gulp.task('sass', function() {
     return gulp.src('./src/sass/style.scss')
     .pipe(wait(500))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./web/css'))
    .pipe(browserSync.stream());
});
gulp.task('build', ['serve', 'reload', 'sass','juck', 'img', 'js']);
gulp.task('default',['build'])