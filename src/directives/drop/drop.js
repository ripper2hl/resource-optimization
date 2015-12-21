(function (){
  'use strict';

  angular.module('resourceOptimization')
  .directive('drop', function(compress){
    return {
      restrict : 'E',
      templateUrl: 'directives/drop/drop.html',
      controller : function (){

        document.addEventListener('dragover',function(event){
          event.preventDefault();
          return false;
        },false);

        document.addEventListener('drop',function(event){
          event.preventDefault();
          console.log('droped file');
          var files = event.dataTransfer.files;
          var filePaths = [];
          for (var i = 0; i < files.length; i++) {
              var file = files.item(i);
              if(file){
                console.log('File: ', file);
                filePaths.push(file.path);
              }else{
                console.log('File path is undefined: ', file.path);
              }
          }

          compress.start(filePaths);
          return false;
        },false);

      },
      controllerAs : 'dropCtrl'
    };
  });

})();
