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
        {
            title: "Sandman Hotel - Broadway and Burrard",
            address1: "1755 W Broadway #310",
            address2: "Vancouver, BC V6J 4S5",
            url: "http://sandmanhotels.ca",
            urlShow: "sandmanhotels.ca",
            phone: "(604) 730-6600",
            show: false,
            // marker: new google.maps.Marker({
            //     position: new google.maps.LatLng(49.263755, -123.144611),
            //     icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            //     title: 'Sandman'

            // })
        },
       {
           title: "Park Inn and Suites by Radisson - Broadway and Laurel",
           address1: "898 W Broadway",
           address2: "Vancouver, BC V5Z 1L7",
           url: "http://parkinn.com",
           urlShow: "parkinn.com",
           phone: "(604) 872-8661",
           show: false,
           // marker: new google.maps.Marker({
           //     position: new google.maps.LatLng(49.263313, -123.123708),
           //     icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
           //     title: 'Park Inn and Suites'
           // })
       },
           {
               title: "Holiday Inn Vancouver Centre  - Broadway and Heather",
               address1: "711 W Broadway",
               address2: "Vancouver, BC V5Z 3Y2",
               url: "http://ihg.com",
               urlShow: "ihg.com",
               phone: "(604) 879-0511",
               show: false,
               // marker: new google.maps.Marker({
               //     position: new google.maps.LatLng(49.263357, -123.120242),
               //     icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
               //     title: 'Holiday Inn'
               // })
           },
             {
                 title: "West Coast Suites at UBC",
                 address1: "75961 Student Union Blvd",
                 address2: "Vancouver, BC V6T 2C9",
                 url: "http://ubcconferences.com",
                 urlShow: "ubcconferences.com",
                 phone: "(604) 822-1000",
                 show: false,
                 // marker: new google.maps.Marker({
                 //     position: new google.maps.LatLng(49.270762, -123.248261),
                 //     icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                 //     title: 'West Coast Suites'
                 // })
             },
             {
                 title: "Gage Apartments at UBC",
                 address1: "5959 Student Union Boulevard",
                 address2: "Vancouver, BC V6T 1K22",
                 url: "http://ubcconferences.com",
                 urlShow: "ubcconferences.com",
                 phone: "(604) 822-1000",
                 show: false,
                 // marker: new google.maps.Marker({
                 //     position: new google.maps.LatLng(49.269349, -123.249907),
                 //     icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                 //     title: 'Gage Towers'
                 // }),
             },

    ];
    $scope.taxis = [
    {
        name: "Yellow Cab",
        phone: "604-681-1111"
    },
      {
          name: "Vancouver Taxi",
          phone: "604-877-1111"
      },
        {
            name: "MacLures Cabs",
            phone: "604-683-6666"
        },
          {
              name: "Black Top And Checker Cabs",
              phone: "604-731-1111"
          },
    ];
    $scope.showHotel = function (hotel) {
        hotel.show = !hotel.show;
        // if (typeof (hotel.marker.map) === 'undefined' || hotel.marker.map === null) {

        //     hotel.marker.setMap($scope.map);

        // } else {
        //     hotel.marker.setMap(null);
        // }
    }
    // function ready(fn) {
    //     if (document.readyState != 'loading') {
    //         fn();
    //     } else {
    //         document.addEventListener('DOMContentLoaded', fn);
    //     }

    //     ready(function () {

    //         google.maps.event.addDomListener(window, 'load', initialize);

    //     });


    //     function initialize() {
    //         var myLatlng = new google.maps.LatLng(49.264896, -123.227764);
    //         var mapOptions = {
    //             zoom: 11,
    //             center: myLatlng
    //         }
    //         // $scope.map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

    //         var marker = new google.maps.Marker({
    //             position: myLatlng,
    //             map: map,
    //             title: 'UBC Golf Club'
    //         });
    //     }



    // };
}]);