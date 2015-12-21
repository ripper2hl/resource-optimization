(function(){
  'use strict';
   angular.module('resourceOptimization', ['ngDroplet'])
   .constant('REG_EXP_JS','^.*\.(js|JS)$')
   .constant('REG_EXP_CSS','^.*\.(css|CSS)$')
   .constant('REG_EXP_IMG','^.*\.(png|jpg|jpeg|svg)$');  
})();
