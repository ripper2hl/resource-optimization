(function (){
  'use strict';

  angular.module('resourceOptimization')
  .factory('compress', function (compressResolver) {
    return {
      start : function(files){
        files.forEach(function(file){
          compressResolver.compress(file);
        });
      }
    };
  });
})();
