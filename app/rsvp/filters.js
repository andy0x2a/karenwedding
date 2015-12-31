angular.module('myApp.startsWith', [])
    .filter('startsWith', [function () {
        return function (input, expected) {
            var out = [];

            if (typeof (expected) === "undefined") {
                return input;
            };
            angular.forEach(input, function (guest) {
                var lowerStr = (guest.name).toLowerCase();
                if (lowerStr.indexOf(expected.toLowerCase()) == 0) {
                    out.push(guest);
                }
            });

            return out;
        }
    }]);
