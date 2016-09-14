const gulp = require('gulp');
const stylus = require('gulp-stylus');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();

gulp.task('default', ['serve:dev', 'watch:css', 'sync']);


gulp.task('sync', () => {
    browserSync.init({
        proxy: 'http://localhost:3000',
        port: 3001,
        files: ['app/**/*.*', '!app/**/*.styl']
    });
});

gulp.task('serve:dev', function () {
    nodemon({
        script: 'server.js',
        ext: 'js',
        ignore: ['app*', 'gulp*']
    });
});
gulp.task('watch:css', ['css'], () => {
    gulp.watch('app/css/**/*.styl', ['css']);
});

gulp.task('css', () => {
    return gulp.src(['app/css/**/*.styl'])
        .pipe(stylus())
        .pipe(gulp.dest('app/css/'));
});