
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
    $scope.findConstanctxm = function(){
      alert('开始查找联系人');
      var options      = new ContactFindOptions();
      options.filter   = "小";
      options.multiple = true;
      options.desiredFields = [navigator.contacts.fieldType.id];
      options.hasPhoneNumber = true;
      var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
      navigator.contacts.find(fields, onSuccess, onError, options);
    };

    function onSuccess(contacts) {
      $scope.count1 = contacts.length;
      $scope.constactss = contacts;

      //alert('Found ' + contacts.length + ' contacts.');
      //console.log("Formatted: "  + contacts[0].name.formatted       + "\n" +
      //  "Family Name: "  + contacts[0].name.familyName      + "\n" +
      //  "Given Name: "   + contacts[0].name.givenName       + "\n" +
      //  "Middle Name: "  + contacts[0].name.middleName      + "\n" +
      //  "Suffix: "       + contacts[0].name.honorificSuffix + "\n" +
      //  "Prefix: "       + contacts[0].name.honorificSuffix);
    }

    function onError(contactError) {
      alert('onError!');
    }
  });



