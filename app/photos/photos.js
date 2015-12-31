'use strict';

angular.module('myApp.photos', ['ngRoute', 'myApp.service'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/photos', {
        templateUrl: 'photos/photos.html',
        controller: 'photosController'
    });
}])

.controller('photosController', ['$scope', '$rootScope', '$filter', '$window', 'apiService', function ($scope, $rootScope, $filter, $window, api) {

    $scope.init = function () {
        window.scrollTo(0, 0);

        $scope.keyCodes = [27, 37, 39];

        $rootScope.$on('keydown', function (evt, obj, key) {
            if ($scope.keyCodes.indexOf(obj.keyCode) > -1 && obj.currentTarget.URL.indexOf("#/photos") > -1) {
                $scope.changePhoto(obj);
            }

        });

        $scope.getPhotos();
    };

    $scope.getDocHeight = function () {
        return $($window).height();
    };
    $scope.showImage = function (photo) {
        $scope.currentPhoto = photo;
        $scope.isFullscreen = true;

    };

    $scope.changePhoto = function ($event, identifier) {
        console.log($event.keyCode);
        if ($event.keyCode === 27) {
            $scope.hideImage();
        }
        if ($event.keyCode === 37 && $scope.currentPhoto.index > 0) {
            $scope.currentPhoto = $scope.photoTemplates.photos[$scope.currentPhoto.index - 1]
        }
        if ($event.keyCode === 39 && $scope.currentPhoto.index < $scope.photoTemplates.photos.length - 1) {
            $scope.currentPhoto = $scope.photoTemplates.photos[$scope.currentPhoto.index + 1]
        }
        $scope.$apply();

    }

    $scope.hideImage = function () {
        console.log("hiding image");
        $scope.isFullscreen = false;
        $scope.currentPhoto = undefined;
    };
    $scope.getPhotos = function () {
        $scope.photoTemplates = api.getPhotos();
        angular.forEach($scope.photoTemplates.photos, function (photo, idx) {
            photo.thumb = $scope.photoTemplates.path + "thumb/" + photo.name;
            photo.url = $scope.photoTemplates.path + "" + photo.name;
            photo.index = idx;
            photo.tabindex = 7 + (idx * 2);
            
        });
    }


    $scope.init();
}]);