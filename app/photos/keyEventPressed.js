
angular.module('myApp.keyEventPressed', [])
    .directive('keyEventPressed', ['$document', '$rootScope', function ($document, $rootScope) {
        return {
            restrict: 'A',
            link: function () {
                console.log('linked');

                $document.bind('keydown', function (e) {
                    $rootScope.$broadcast('keydown', e, String.fromCharCode(e.which));
                });
            }
        }
    }]);
