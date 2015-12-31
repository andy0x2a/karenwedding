'use strict';

angular.module('myApp.directions', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/directions', {
        templateUrl: 'directions/directions.html',
        controller: 'directionsController'
    });
}])

.controller('directionsController', ['$scope', function ($scope) {
    window.scrollTo(0, 0);
    $scope.hotels = [
    

    ];
    $scope.taxis = [
  
    ];
    $scope.showHotel = function (hotel) {
        hotel.show = !hotel.show;
      
    }
    
}]);