var gulp = require('gulp');
var gulpFilter = require('gulp-filter');

var mocha = require('gulp-mocha');

var paths = {
  src: './src/main/js',
  test: './src/test/js'
};

gulp.task('test', function() {
  gulp.src([paths.test + '/**/*.js'])
    .pipe(mocha())
    .on('error', console.warn.bind(console));
});

gulp.task('watch', function() {
  gulp.watch(paths.src + '/**/*.js', ['test']);
});

gulp.task('default', ['test', 'watch']);
