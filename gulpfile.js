var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('publish-page', function() {
     return gulp.src('./pages/**/*')
     .pipe(ghPages());
});