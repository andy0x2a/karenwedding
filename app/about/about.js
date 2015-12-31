'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'aboutController'
  });
}])

.controller('aboutController', [function() {


      window.scrollTo(0,0);

    }]);