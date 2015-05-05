var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('publish-page', ['publish-page-cn'], function() {
     return gulp.src('./pages/**/*')
     .pipe(ghPages());
});

gulp.task('publish-page-cn', function() {
     return gulp.src('./pages/**/*')
     .pipe(ghPages({
     		remoteUrl : 'git@gitcafe.com:xunuo/test.git'
     }));
});