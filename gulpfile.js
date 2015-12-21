// File: gulpfile.js
'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;

gulp.task('inject-me', function () {
  var target = gulp.src('./src/index.html');

  var sources = gulp.src(['./src/**/*.js', './src/**/*.css', '!./src/bower_components/**/*'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./src'));
});

gulp.task('inject-vendor', function() {
  gulp.src('./src/index.html')
  .pipe(wiredep({
    directory: './src/bower_components/'
  }))
  .pipe(gulp.dest('./src/'));
});

gulp.task('inject',['inject-vendor','inject-me']);
