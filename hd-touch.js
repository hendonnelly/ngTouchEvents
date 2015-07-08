'use strict';
(function () {
    var directives = angular.module('app.directives');

    directives.directive('hdTouchstart', [function () {
        return function(scope, element, attr) {

            element.on('mousedown', function (event) {
                scope.$apply(function () {
                    scope.$eval(attr.hdTouchstart);
                });
            });

            element.on('touchstart', function(event) {
                scope.$apply(function() { 
                    scope.$eval(attr.hdTouchstart); 
                });
            });
        };
    }]).directive('hdTouchend', [
        function() {
            return function(scope, element, attr) {

                element.on('mouseup', function (event) {
                    scope.$apply(function () {
                        scope.$eval(attr.hdTouchend);
                    });
                });

                element.on('touchend', function(event) {
                    scope.$apply(function() {
                        scope.$eval(attr.hdTouchend);
                    });
                });
            };
        }
    ]);

})();
