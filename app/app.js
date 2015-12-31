'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.constants',
  'myApp.startsWith',
  'myApp.modal',
  'myApp.service',
  'myApp.keyEventPressed',
  'myApp.welcome',
  'myApp.rsvp',
  'myApp.photos',
  'myApp.registry',
  'myApp.contact',
  'myApp.directions',
   'myApp.about',
   'myApp.admin'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/welcome'});
}]);
