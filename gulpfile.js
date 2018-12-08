var gulp = require('gulp')
var server = require('gulp-webserver')
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 8080,
            proxies: [
                { source: "/list", target: "http://192.168.2.113:3000/list" }
            ]
        }))
})