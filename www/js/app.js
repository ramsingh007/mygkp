// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.slideCtrl'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }


    var appopen = localStorage.getItem('appopen');
  if (!appopen) {
    $location.url('/app/search');
  }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


    .state('slide', {
    url: '/slide',
    templateUrl: 'templates/slide.html',
    controller: 'slideCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'slideCtrl'
  })
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.category', {
    url: '/category',
    views: {
      'menuContent': {
        templateUrl: 'templates/category.html'
      }
    }
  })

  .state('app.account', {
      url: '/account',
      views: {
        'menuContent': {
          templateUrl: 'templates/account.html'
        }
      }
    })
    .state('app.shoplist', {
      url: '/shoplist',
      views: {
        'menuContent': {
          templateUrl: 'templates/shoplist.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
      .state('app.chat', {
      url: '/chat',
      views: {
        'menuContent': {
          templateUrl: 'templates/chat.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
        .state('app.todayoffer', {
      url: '/todayoffer',
      views: {
        'menuContent': {
          templateUrl: 'templates/todays_offer.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.shop_details', {
    url: '/shop_details/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/shop_details.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/slide');
});
