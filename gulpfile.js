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
//TODO Verificar el tipo de imagen (png,jpg,gif,etc) y aplicar el plugin correspondiente
gulp.task('compress-img',function (){
  gulp.src('./img/**/*.*')
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
gulp.task('compress-css',function (){
  gulp.src('./css/**/*.css')
  .pipe($.minifyCss( {processImport: false}))
  .pipe(gulp.dest('./dist/css/'));
});

/**
 * Minifica los archivos js dejandolos en la ruta dist/js
 * @author Jesus Perales.
 **/
gulp.task('compress-js',function (){
  gulp.src('./js/**/*.js')
  .pipe($.uglify({mangle: false }))
  .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', ['compress-img','compress-css','compress-js']);
