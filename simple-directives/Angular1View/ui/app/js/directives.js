(function () {
    "use strict";
/*
 *  Directive to encapsulate html markup to display icons
 *  (e..g using bootstrap glyphs or any third party icons)
*/
    angular.module("wex1View").directive("wexIcon", [
        function () {

            return {
                restrict: 'E',
                replace: true,
                scope: {
                    "icon": "="
                },
                templateUrl: 'app/directive-templates/icon.html'
            };

        }
    ]);
/*
    Directive to embed google map
*/
    angular.module("wex1View").directive("wexMap", [
        function () {

            return {
                restrict: 'E',
                replace: true,
                scope: {
                    "address": "="
                },
                templateUrl: 'app/directive-templates/google-map.html'
            };

        }
    ]);


}());
