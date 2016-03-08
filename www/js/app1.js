// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
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
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
   $stateProvider

   .state('app', {
   url: '/app',
   abstract: true,
   templateUrl: 'templates/menu.html',
   controller: 'AppCtrl'
   })

   .state('app.search', {
   url: '/search',
   views: {
   'menuContent': {
   templateUrl: 'templates/search.html'
   }
   }
   })

   .state('app.browse', {
   url: '/browse',
   views: {
   'menuContent': {
   templateUrl: 'templates/browse.html'
   }
   }
   })
   .state('app.playlists', {
   url: '/playlists',
   views: {
   'menuContent': {
   //templateUrl: 'templates/playlists.html',
     templateUrl: 'templates/003table.html',
   controller: 'PlaylistsCtrl'
   }
   }
   })

   .state('app.single', {
   url: '/playlists/:playlistId',
   views: {
   'menuContent': {
   //templateUrl: 'templates/playlist.html',
     templateUrl: 'templates/003table.html',
   controller: 'PlaylistCtrl'
   }
   }
   });
   // if none of the above states are matched, use this as the fallback
   $urlRouterProvider.otherwise('/app/playlists');
   });

  ////路由配置
  //.config(function ($stateProvider, $urlRouterProvider) {
  //  $stateProvider
  //    .state('', {
  //      url: '',
  //      abstract: true,
  //      templateUrl: ''
  //    })
  //    .state('001', {
  //      url: '/001',
  //      //templateUrl: 'templates/001table.html'
  //      views: {
  //        'menuContent': {
  //          templateUrl: 'templates/001table.html',
  //          controller: 'PlaylistCtrl'
  //        }}
  //    })
  //    .state('002', {
  //      url: '/002',
  //      templateUrl: 'templates/002table.html'
  //    })
  //    .state('003', {
  //      url: '/003',
  //      templateUrl: 'templates/003table.html'
  //    });
  //});
