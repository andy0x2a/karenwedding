'use strict';

angular.module('myApp.service', [])

.service('apiService', ['constants', '$http', function (constants, $http) {


    var _getAllFamilies = function () {
        var req = {
            method: 'GET',
            url: constants.config.apiBase + '/family/'

        };
        return $http(req);
    };
    var _getAllGuests = function (password) {
        var req = {
            method: 'GET',
            url: constants.config.apiBase + '/admin/guests/',
            headers: {
                'adminPass': password
            },
        };
        return $http(req);
    };
    var _doLogin = function (password) {
        var req = {
            method: 'GET',
            url: constants.config.apiBase + '/admin/login/',
            headers: {
                'adminPass': password
            },
        };
        return $http(req);
    };

    var _submitGuests = function (requestData) {
        var req = {
            method: 'POST',
            url: constants.config.apiBase + '/rsvp/updateList',
            data: requestData

        };
        return $http(req);
    };


    var _getPhotos = function () {
        var galleryLocation = "/img/gallery/";

        var _photos = [
        { name: "1.jpg" },
        { name: "2.jpg" },
        { name: "3.jpg" },
        { name: "4.jpg" },
        { name: "5.jpg" },
        { name: "6.jpg" },
        { name: "7.jpg" },
        { name: "8.jpg" },
        { name: "9.jpg" },
        { name: "10.jpg" },
        { name: "11.jpg" },
        { name: "12.jpg" },
        { name: "Emily and Andy Engagement-1.jpg" },
        { name: "Emily and Andy Engagement-2.jpg" },
        { name: "Emily and Andy Engagement-3.jpg" },
        { name: "Emily and Andy Engagement-4.jpg" },
        { name: "Emily and Andy Engagement-5.jpg" },
        { name: "Emily and Andy Engagement-6.jpg" },
        { name: "Emily and Andy Engagement-7.jpg" },
        { name: "Emily and Andy Engagement-8.jpg" },
        { name: "Emily and Andy Engagement-9.jpg" },
        { name: "Emily and Andy Engagement-10.jpg" },
        { name: "Emily and Andy Engagement-11.jpg" },
        { name: "Emily and Andy Engagement-12.jpg" },
        { name: "Emily and Andy Engagement-13.jpg" },
        { name: "Emily and Andy Engagement-14.jpg" },
        { name: "Emily and Andy Engagement-15.jpg" },
        { name: "Emily and Andy Engagement-16.jpg" },
        { name: "Emily and Andy Engagement-17.jpg" },
        { name: "Emily and Andy Engagement-18.jpg" }

        ];


        return { path: galleryLocation, photos: _photos };

    }

    return {

        getAllFamilies: _getAllFamilies,
        submitGuests: _submitGuests,
        getPhotos: _getPhotos,
        getAllGuests: _getAllGuests,
        doLogin: _doLogin
    }
}]);