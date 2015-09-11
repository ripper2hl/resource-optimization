// File: Gulpfile.js
'use strict';
var gulp = require('gulp');
var nib = require('nib');
var pngquant = require('imagemin-pngquant');
var $ = require('gulp-load-plugins')();

// Comprime los archivos CSS y JS enlazados en el index.html
// y los minifica.
gulp.task('compress', function() {
  gulp.src('./src/index.html')
  .pipe($.useref.assets())
  .pipe($.if('*.js', $.uglify({mangle: false })))
  .pipe($.if('*.css', $.minifyCss( {processImport: false})))
  .pipe(gulp.dest('./dist/app'));
});

// Copia el contenido de los estáticos e index.html al directorio
// de producción sin tags de comentarios
gulp.task('copy', function() {
  //Ruta de la aplicacion web
  var appPhat = './dist/app/';
  gulp.src('./src/index.html')
  .pipe($.useref())
  .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
  .pipe(gulp.dest(appPhat));

  gulp.src('./src/lib/building-blocks/**')
  .pipe($.if('*.png',$.imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
    })))
  .pipe($.if('*.js', $.uglify({mangle: false })))
  .pipe($.if('*.css', $.minifyCss( {processImport: false})))
  .pipe($.ignore.exclude('*.html'))
  .pipe($.ignore.exclude('*.zip'))
  .pipe($.ignore.exclude('*.md'))
  .pipe($.ignore.exclude('*.manifest'))
  .pipe($.ignore.exclude('*.webapp'))
  .pipe(gulp.dest(appPhat + 'lib/building-blocks/'));

  gulp.src('./src/analytics/flurry.js')
  .pipe(gulp.dest(appPhat + 'analytics'));

  gulp.src('./src/locales/*.json')
  .pipe(gulp.dest(appPhat + 'locales'));

  gulp.src('./src/img/**/*.*')
  .pipe($.if('*.png',$.imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
    })))
  .pipe(gulp.dest(appPhat + 'img'));

  gulp.src('./src/manifest.webapp')
  .pipe(gulp.dest(appPhat));
});

gulp.task('default', ['server','templates', 'inject', 'wiredep', 'watch']);
gulp.task('build', ['templates', 'compress', 'copy', 'uncss','package-firefoxOS']);