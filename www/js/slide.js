angular.module('starter.slideCtrl', [])


.controller('slideCtrl', function ($scope, $location, $ionicPopup) {


  $scope.slide = function () {
   
      // Login with code
  window.localStorage.setItem("appopen", 'sdfsdfsdf');
        $location.url('/login');

  }
    $scope.login = function () {
   
      // Login with code

        $location.url('/app/category');

  }


});

