// File: gulpfile.js
'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var angularFilesort = require('gulp-angular-filesort');
var pngquant = require('imagemin-pngquant');
var $ = require('gulp-load-plugins')();


gulp.task('inject-me', function () {


  gulp.src('./src/index.html')
  .pipe(inject(
    gulp.src(['./src/**/*.js', './src/**/*.css', '!./src/bower_components/**/*'])
    .pipe(angularFilesort()), {
    read: false,
    ignorePath: '/src/',
    relative:true
  }))
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
