angular.module('starter.slideCtrl', [])


.controller('slideCtrl', function ($scope, $location, $ionicPopup) {


  $scope.login = function () {
   
      // Login with code
  window.localStorage.setItem("appopen", 'sdfsdfsdf');
        $location.url('/app/search');

  }

});

