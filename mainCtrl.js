angular.module('vimeoApp')
  .controller("vimeoCtrl", function($scope) {
    $scope.get("/user").then((user) => {
      console.log('user',user);
    })
  })
