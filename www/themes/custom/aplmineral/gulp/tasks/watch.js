
var gulp = require('gulp');

gulp.task('watch:styles', ['styles'], function () {
  gulp.watch('assets/sass/**/*', ['styles']);
});

gulp.task('watch', ['watch:styles']);
