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


/*
    Directive to highlight a term based on user entered keyword for search
*/
    angular.module("wex1View").directive("wexHighlight", ["$sce",
        function ($sce) {

          return {
            restrict: "E",
            template: '<span ng-bind-html="highlight( highlightTerm, text ) " ></span>',
            replace: true,
            scope: {
              highlightTerm: "=",
              text: "="
            },
            link: function (scope, element) {
                scope.highlight = function (highlightTerm, text) {
                        if(text === null) {
                            return '';
                        }
                        if (!highlightTerm || highlightTerm.length === 0) {
                            return $sce.trustAsHtml(typeof text === 'string'? text : text.toString() );
                        }
                        text = typeof text != 'string' ? text.toString() : text;
                        return $sce.trustAsHtml(text.replace(new RegExp('(' + highlightTerm + ')', 'gi'), '<mark>$1</mark>'));
                    };
            }

          };


        }
    ]);


}());
