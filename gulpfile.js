/*
 * gulpfile.js
 * Copyright (C) 2015 vishalapr <vishalapr@vishalapr-Lenovo-G50-70>
 *
 * Distributed under terms of the MIT license.
 */


var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var notify = require('gulp-notify');

gulp.task('jasmine', function() {
	return gulp.src(['src/**/*.js','spec/**/*_spec.js'])
		.pipe(jasmineBrowser.specRunner())
		.pipe(jasmineBrowser.server({port: 8888}));
});

var watch = require('gulp-watch')
 
gulp.task('jasmine-watch', function() {
  var filesForTest = ['src/**/*.js', 'spec/**/*_spec.js'] 
  return gulp.src(filesForTest)
    .pipe(watch(filesForTest))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({port: 8888}));
});

gulp.task('jasmine-phantom', function() {
	return gulp.src(['src/**/*.js', 'spec/**/*_spec.js'])
		.pipe(jasmineBrowser.specRunner({console: true}))
		.pipe(jasmineBrowser.headless());
});
