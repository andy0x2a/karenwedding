'use strict';

angular.module('myApp.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {
    templateUrl: 'welcome/welcome.html',
    controller: 'welcomeController'
  });
}])

.controller('welcomeController', ['$scope', '$rootScope', '$filter', '$interval', function($scope, $rootScope, $filter, $interval) {

$scope.changePhoto = function() {
	console.log("Changing Photo");

	if ($scope.currentPhotoIndex >= $scope.photos.length -1) {
		$scope.currentPhotoIndex = 0;
	} else {
		$scope.currentPhotoIndex++;
	}

}

$scope.init = function() {
	$scope.getImages();
	   window.scrollTo(0,0);
	   $interval(function() {$scope.changePhoto();}, 5000 );

}

$scope.getImages = function() {
	   $scope.galleryLocation = "/img/gallery/";
	$scope.photos = [
		{
		 name:"black&white.jpg"		
		},
		{
		 name:"hug.jpg"		
		},
		{
		 name:"hug2.jpg"		
		},
		{
		 name:"Ring.jpg"		
		},
		{
		 name:"Savethedate.jpg"		
		}
	];

	angular.forEach($scope.photos, function(photo, idx) {
 		photo.src = $scope.galleryLocation + "" + photo.name;
 		 photo.index = idx;
	});
	$scope.currentPhotoIndex = 0;
};

	$scope.init();   
    }]);