'use strict';

angular.module('myApp.rsvp', ['ngRoute', 'myApp.startsWith', 'myApp.service'])


.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/rsvp', {
        templateUrl: 'rsvp/rsvp.html',
        controller: 'rsvpController'
    });
}])


.controller('rsvpController', ['$scope', '$filter', 'apiService', '$http', '$q', function ($scope, $filter, api, $http, $q) {
    $scope.names = [];
    $scope.searchCtr = 0;
    $scope.loadAllFamilies = function () {
        var task = api.getAllFamilies();
        task.then(function (data) {

            $scope.families = data.data;

            angular.forEach($scope.families, function (family) {
                angular.forEach(family.members, function (member) {
                    member.familyId = family.id;
                    member.familyName = family.name;
                    $scope.names.push(member);
                })

            });

        }, function (error) {
            alert("something went wrong, please reload the page and try again. If this problem persists, contact Andy");
        });
    }
    $scope.loadAllFamilies();

    $scope.attendingStatus = function (guest) {
        if (typeof (guest.status) !== "undefined" && guest.status !== null) {
            return guest.status === "attending" ? 1 : 0;
        }
        return 0;
    }

    $scope.guestListClicked = function (guest) {
        $scope.getFamilyForGuest(guest).then(function (family) {
            $scope.setGuestDataForFamily(family, guest);
            $scope.guestFound = true;
        });
        
    }

    $scope.searchKeyPressed = function ($event) {
        var highlightSearchResult = function(ctr) {

            angular.forEach($scope.pruned,function(guest, i) {
                if (i !== ctr) {
                    guest.highlighted = false;
                } else {
                    guest.highlighted = true;
                }
            
            });
        };
        //40 down
        //38 up
        if ($event.which === 40) {
            $scope.searchCtr++;
            if ($scope.searchCtr > $scope.pruned.length -1) {
                $scope.searchCtr = $scope.pruned.length -1;
            }
            highlightSearchResult($scope.searchCtr);

        } else if ($event.which === 38) {
            $scope.searchCtr--;
            if ($scope.searchCtr <0) {
                $scope.searchCtr = 0;
            }
            highlightSearchResult($scope.searchCtr);

        }  else if ($event.which === 13) {
            $scope.enterSearch($event)
        } else {
            $scope.searchCtr = -1;
        }

    }
    $scope.enterSearch = function ($event) {
        if ($scope.pruned.length === 1) {
            $scope.guestListClicked($scope.pruned[0]);
        } else if($scope.searchCtr >=0) {
            $scope.guestListClicked($scope.pruned[$scope.searchCtr]);
        }
        $event.originalEvent.preventDefault();
       
    }
    $scope.getFamilyForGuest = function (guest) {
        var family;
        var defer = $q.defer();

        angular.forEach($scope.families, function (fam) {

            if (guest.familyId === fam.id) {
                family = fam;
                family.head = guest.name;
                defer.resolve(family);
            }
        });
        
        return defer.promise;
    };
    $scope.findGuest = function (gName) {
        var result;
         $scope.pruned = $filter('startsWith')($scope.names, gName);
        //   if ($scope.pruned.length === 1) {
        //         result = $scope.pruned[0];
        //    $scope.guestFound = true;
        //}
        return result;

    };

    $scope.searchForGuest = function () {
        var guest = $scope.findGuest($scope.guestSearch);
        if (typeof (guest) !== "undefined") {

            $scope.getFamilyForGuest(guest).then(function (family) {

                $scope.setGuestDataForFamily(family, guest);
                $scope.guestFound = true;
            }) ;
            
        }

    }


    $scope.setGuestDataForFamily = function (family, guest) {

        if (typeof family != "undefined") {
            $scope.pruned = [];
            $scope.guest = guest;
            $scope.guest.name = family.head;
            $scope.guest.members = family.members;
            $scope.guest.maxMembers = family.familySize;
            angular.forEach($scope.guest.members, function (member, index) {
                if (member.name == family.head) {
                    $scope.guest.members.splice(index, 1);
                }
            });
            var startingSize  = family.members.length;
            for (var sizeItr = family.familySize - 1; sizeItr > startingSize; sizeItr--) {
                $scope.guest.members.push({
                    familyId: $scope.guest.familyId
                });
            }
            return true;
        }
        var name = $scope.guest.name;
        $scope.guest = {};
        $scope.guest.name = name;

    }
    $scope.submit = function () {

        var modalGuestMessges = [];

        modalGuestMessges.push($scope.guest.name + " is " + $scope.guest.status);

        angular.forEach($scope.guest.members, function (member) {
            modalGuestMessges.push(member.name + " is " + member.status);
        });
        //window.confirm(message);
        $scope.modalGuestMessges = modalGuestMessges;
        $scope.modalShown = true;
    }

    $scope.submittoapi = function () {
        var allMembersToSubmit = [];
        allMembersToSubmit.push($scope.guest);

        angular.forEach($scope.guest.members, function (member) {
            allMembersToSubmit.push(member);
        });

      
        var task = api.submitGuests(allMembersToSubmit);
        task.then(function () {
            $scope.thankYouMessage = "RSVP confirmed. Thank you"

        }, function () {
            $scope.thankYouMessage = "Uh oh, something went wrong, please reload the page and try again. If the problem persists, please contact Andy";
           
        }).finally(function () {
            $scope.modalShown = false;
            $scope.showThankYou = true;
            $scope.reload();
            

        });

    };
    window.scrollTo(0, 0);

    $scope.isValid = function (guest) {

        if (typeof (guest) === "undefined") {
            return false;
        }

        var isValidAttending = function (attending) {
            return (typeof (attending) !== "undefined" && attending !== null);
        };
        var isValid = true;

        if (!isValidAttending(guest.status)) {
            return false;
        };
        angular.forEach(guest.members, function (member) {
            console.log(member.name + " " + member.status);
            if (!isValidAttending(member.status)) {
                isValid = false;
            }
        });
        return isValid;

    };
    $scope.reload = function () {
        $scope.pruned = [];
        $scope.guestSearch = "";
        $scope.guest = undefined;
        $scope.guestFound = false;
        $scope.names = [];
        $scope.loadAllFamilies();
        $scope.searchCtr = 0;
    }
    $scope.closeModal = function () {
        $scope.showThankYou = false;
    }
    
}]);