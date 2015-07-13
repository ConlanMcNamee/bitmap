var gulp = require('gulp'),
		mocha = require('gulp-mocha'),
		jshint = require('gulp-jshint');

gulp.task('default', ['test', 'lint'], function() {});

gulp.task('test', function() {
	gulp.src('./test.js')
		.pipe(mocha());
});

gulp.task('lint', function() {
	gulp.src('*.js')
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
});	