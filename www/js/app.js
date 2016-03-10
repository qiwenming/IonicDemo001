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

  //路由设置
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('xxx', {
        url: '/xxx',
        abstract:true,
        templateUrl: "templates/menutest.html",
        //controller: "AppCtrl"
      })
      .state('xxx.modal', {
        url: '/modal',
        views: {
          'menuContent': {
            templateUrl: "templates/004modal.html",
            controller: "AppCtrl"
          }
        }
      })
      .state('xxx.table1', {
        url: '/table1',
        views: {
          'menuContent': {
            templateUrl: "templates/001table.html",
            controller: "tableCtrl"
          }
        }
      })
      .state('xxx.table2', {
        url: '/table2',
        views: {
          'menuContent': {
            templateUrl: "templates/002table.html",
            controller: "tableCtrl"
          }
        }
      })
      .state('xxx.table3', {
        url: '/table3',
        views: {
          'menuContent': {
            templateUrl: "templates/003table.html",
            controller: "tableCtrl"
          }
        }
    });
    $urlRouterProvider.otherwise('/xxx/modal');
  })
;
