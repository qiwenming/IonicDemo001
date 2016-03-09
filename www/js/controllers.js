
angular.module('starter.controllers', [])
  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    $ionicModal.fromTemplateUrl('templates/004modal_login.html',{
      scope:$scope
    }).then(function(modal){
      $scope.modal = modal;
    });
    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    $scope.doLogin = function () {
      $timeout(function(){
        $scope.closeLogin();
      },1500);
    };
  });


