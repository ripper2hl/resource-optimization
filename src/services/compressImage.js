(function (){
  'use strict';

  angular.module('resourceOptimization')
  .factory('compressImage', function () {
    return {
      compress : minify
    };
  });

  var Imagemin = require('imagemin');
  var fs = require('fs');
  var path = require('path');

  function minify(file, cb) {
    console.log('minify -->');
    fs.readFile(file, function (err, buf) {
      if (err) {
        console.log('Error: ' ,err);
        return;
      }

      var imagemin = new Imagemin()
      .src(buf)
      .dest(path.join(path.dirname(file), 'build', path.basename(file)))
      .use(Imagemin.gifsicle())
      .use(Imagemin.jpegtran());
      // .use(Imagemin.optipng())
      // .use(Imagemin.pngquant())
      // .use(Imagemin.svgo());

      imagemin.optimize(function (err, file) {
        if (err) {
          console.log('Error: ' ,err);
          //cb(err);
          return;
        }
        console.log('optimized: ',file);
        //cb(null, assign(file, { original: buf }));
      });
    });
    console.log('minify //>');
  }
})();
