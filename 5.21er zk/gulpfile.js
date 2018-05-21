var gulp = require('gulp');
var path = require('path');
var url = require('url');
var sequence = require('gulp-sequence');
var webserver = require('gulp-webserver');
gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(webserver({
            port: 8080,
            host: 'localhost',
            livereload: true,
            middleware: function(req, res, next) {
                next();
            }
        }))
})

gulp.task('default', function(cb) {
    sequence('server', cb)
})