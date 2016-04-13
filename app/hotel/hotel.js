'use strict';

angular.module('myApp.hotel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hotel', {
    templateUrl: 'hotel/hotel.html',
    controller: 'hotelController'
  });
}])

.controller('hotelController', [function() {
      window.scrollTo(0,0);

}]);