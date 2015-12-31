'use strict';

angular.module('myApp.registry', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/registry', {
    templateUrl: 'registry/registry.html',
    controller: 'registryController'
  });
}])

.controller('registryController', [function() {
      window.scrollTo(0,0);

}]);