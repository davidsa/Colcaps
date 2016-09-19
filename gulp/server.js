var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();

gulp.task('dev:server', function () {
    nodemon({
        script: 'server.js',
        ext: 'js',
        ignore: ['node_modules*', 'gulp*', 'assets*', 'app*']
    }).on('start', () => {
        startBrowserSync();
    });
});

let startBrowserSync = ()=> {
    browserSync.init({
        proxy: 'localhost:3000',
        port: 9000,
        files: ['app/**/*.*', '!app/**/*.styl'],
        injectChanges: true,
        notify: true
    });
};
