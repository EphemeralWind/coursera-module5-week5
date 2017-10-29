(function () {
"use strict";

angular.module('common')
.service('AccountService', AccountService);


AccountService.$inject = [];
function AccountService() {
  var service = this;

  var account = null;

  service.setAccount = function (firstName, lastName, email, phone, dish) {
    account = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      dish: dish
    }
  };


  service.getAccount = function (category) {
    return account;
  }
}
})();