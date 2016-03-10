
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

  })

  .controller('tableCtrl',function($scope,$ionicModal, $timeout){

    $scope.constan = {};

    $ionicModal.fromTemplateUrl('templates/001addconst.html',{
      scope:$scope
    }).then(function(modal){
      $scope.modal = modal;
    });

    $scope.addConstanctxm = function(){
      $scope.modal.show();
    };
    $scope.closeAdd = function(){
      $scope.modal.hide();
    };


    //===========查找=============

    $scope.findConstanctxm = function(){
      alert('开始查找联系人');
      var options      = new ContactFindOptions();
      //options.filter   = "Bob";
      options.multiple = true;
      //options.desiredFields = [navigator.contacts.fieldType.id];
      options.hasPhoneNumber = true;
      var fields       = [
        navigator.contacts.fieldType.id,
        navigator.contacts.fieldType.name,
        navigator.contacts.fieldType.phoneNumbers,
        navigator.contacts.fieldType.displayName

      ];
      navigator.contacts.find(fields, onSuccess, onError, options);
    };

    function onSuccess(contacts) {
      $scope.count1 = contacts.length;
      $scope.constactss = contacts;
      //alert('Found ' + contacts.length + ' contacts.');
      for (var i=0;i<contacts.length;i++){
        console.log(i+"----"+contacts[i].id+"-"+contacts[i].name.familyName+"--"+contacts[0].phoneNumbers[0].value);
      }
    }

    function onError(contactError) {
      alert('onError!');
    }

    //=====================添加======================
    $scope.doAdd = function(){
      //window.plugins.toast.showShortCenter('ojdjfdjs');
      alert('doAdd--'+$scope.constan.name1+"--"+$scope.constan.phone);
      var contact = navigator.contacts.create();
      contact.displayName = $scope.constan.name1;
      contact.note = '小明';
      var phoneNumbers = [];
      phoneNumbers[0] = new ContactField('mobile', $scope.constan.phone, true); // preferred number
      contact.phoneNumbers = phoneNumbers;
      window.plugins.toast.showShortBottom(contact.displayName+"--"+contact.phoneNumbers[0].value+"---"+contact.note);
      contact.save();
    }
  })
;



