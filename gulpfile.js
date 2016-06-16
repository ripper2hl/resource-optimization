// File: Gulpfile.js
'use strict';
var gulp = require('gulp');
var pngquant = require('imagemin-pngquant');
var $ = require('gulp-load-plugins')();

/**
 * Optimiza imagenes para ahorrar ancho de banda
 * dejandolos en la ruta dist/img
 * @author Jesus Perales.
**/
gulp.task('img',function (){
  gulp.src('./img/**/*.{png,gif,jpg,jpeg,svg}')
  .pipe($.imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
    }))
  .pipe(gulp.dest('./dist/img/'));
});

/**
 * Minifica los archivos css creandolos en la ruta dist/css
 * @author Jesus Perales.
**/
gulp.task('css',function (){
  gulp.src('./css/**/*.css')
  .pipe($.minifyCss( {processImport: false}))
  .pipe($.rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/css/'));
});

/**
 * Minifica los archivos js dejandolos en la ruta dist/js
 * @author Jesus Perales.
 **/
gulp.task('js',function (){
  gulp.src('./js/**/*.js')
  .pipe($.uglify({mangle: false }))
  .pipe($.rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', ['img','css','js']);
