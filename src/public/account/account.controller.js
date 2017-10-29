(function () {
"use strict";

angular.module('public')
.controller('AccountController', AccountController);

AccountController.$inject = ['$http', 'ApiPath', 'AccountService'];
function AccountController($http, ApiPath, AccountService) {
  var $ctrl = this;
  $ctrl.error = false;
  $ctrl.success = false;
  $ctrl.account = AccountService.getAccount();

  $ctrl.submit = function() {
  	$http.get(ApiPath + '/menu_items/' + $ctrl.dish + '.json').then(function (response) {
      $ctrl.success = true;
      $ctrl.error = false;

console.log(response.data);
      AccountService.setAccount($ctrl.firstName, $ctrl.lastName, $ctrl.email, $ctrl.phone, response.data);
    }, function (response) {
    	$ctrl.success = false;
      	$ctrl.error = true;
    });
  };
}


})();
