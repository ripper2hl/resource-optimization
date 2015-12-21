(function (){
  'use strict';

  angular.module('resourceOptimization')
  .factory('compressJavascript', function ($log) {
    return {
      compress : function(javascriptFile){
        $log.debug('Compress Javascript: ' , javascriptFile);
      }
    }
  });
})();
