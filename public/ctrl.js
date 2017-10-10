angular
  .module('imageApp', ['ngFileUpload'])
  .controller('myCtrl', function($scope, myService) {
    $scope.submit = file => myService.uploadImage(file);
  });
