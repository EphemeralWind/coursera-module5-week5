(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://stormy-bayou-31423.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
