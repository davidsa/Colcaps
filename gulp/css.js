'use strict';
const gulp = require('gulp');
const stylus = require('gulp-stylus');

gulp.task('css', ()=> {
    return gulp.src('app/css/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch:css', ['css'], ()=> {
    gulp.watch('app/css/**/*.styl', ['css']);
});