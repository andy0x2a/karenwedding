'use strict';

angular.module('myApp.admin', ['ngRoute', 'myApp.service'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/admin', {
        templateUrl: 'admin/admin.html',
        controller: 'adminController'
    });
}])

.controller('adminController', ['$scope', 'apiService', function ($scope, apiService) {

    $scope.isAuthorized = false;
    $scope.showGuests = true;
    window.scrollTo(0, 0);
    $scope.getGuests = function () {

        apiService.getAllGuests($scope.adminPassword).then(function (data) {
            $scope.guests = data.data;
        });
    }

    $scope.login = function () {

        var task = apiService.doLogin($scope.adminPassword);
        task.then(function () {
            $scope.isAuthorized = true;
            $scope.getGuests();

        }, function () {
            $scope.isAuthorized = false;
            $scope.adminPassword = "";
            $scope.message = "Invalid password";
            $scope.showMessage = true;
        });
    }

    $scope.submit = function () {
        window.scrollTo(0, 0);
        $scope.showGuests = false;
        apiService.submitGuests($scope.guests).then(function (response) {
            $scope.message = "Success";
            $scope.showMessage = true;
            
        }, function (error) {
            $scope.message = "Error: " + error ;
            $scope.showMessage = true;

        });
    }
    $scope.closeModal = function () {
        $scope.showMessage = false;
        $scope.message = undefined;
        $scope.showGuests = true;
    }
}]);