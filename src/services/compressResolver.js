(function (){
  'use strict';

  angular.module('resourceOptimization')
  .factory('compressResolver', function (compressJavascript,compressCss,compressImage
    , REG_EXP_JS,REG_EXP_CSS,REG_EXP_IMG, $log) {
    return {
      compress : function(file){
        if(file.match(REG_EXP_JS)){
          compressJavascript.compress(file);
        }else if(file.match(REG_EXP_CSS)){
          //TODO
        }else if(file.match(REG_EXP_IMG)){
          compressImage.compress(file);
        }
      }
    };
  });
})();
