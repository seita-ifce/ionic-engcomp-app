angular.module('App')
.controller('TeachersController', function($scope, Teachers){
  $scope.teachers = Teachers.data;

  $scope.onSeeMoreClick = function(url){
    window.open(url, '_system', 'location=yes');
    return false;
  };
})
