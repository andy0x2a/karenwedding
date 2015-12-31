
angular.module('myApp.modal', [])
    .directive('modalDialog', function () {
        return {
            restrict: 'E',
            scope: {
                show: '=',
                onSubmitFunction: '=onSubmitFunction',
                showButtons: "=showButtons",
                onClose: "=onClose"
            },
            replace: true, // Replace with the template below
            transclude: true, // we want to insert custom content inside the directive
            link: function (scope, element, attrs) {

                scope.hideModal = function () {
                    scope.show = false;

                    if (typeof (scope.onClose) !== "undefined") {
                        scope.onClose();
                    }
                };

                scope.doSubmit = function () {
                   
                    if (typeof (scope.onSubmitFunction) !== "undefined") {
                        scope.onSubmitFunction();
                    }

                }
            },
            templateUrl: 'rsvp/modalDialog.html'// See below
        };
    });
