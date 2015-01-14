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

                        if(text === null ) {
                            return '';
                        }
                        if (!highlightTerm || highlightTerm.length === 0 || typeof highlightTerm === 'object') {
                            return $sce.trustAsHtml(typeof text === 'string'? text : text.toString() );
                        }
                        text = typeof text != 'string' ? text.toString() : text;
                        return $sce.trustAsHtml(text.replace(new RegExp('(' + highlightTerm + ')', 'gi'), '<mark>$1</mark>'));
                    };
            }

          };


        }
    ]);




/*
    Directive to highlight a term based on user entered keyword for search
*/
    angular.module("wex1View").directive("wexHeatMap",[
        "$http", "$timeout",
        function($http, $timeout) {

            return {
                restrict: "E",
                scope:false,
                link: function(scope, element) {
                    var cachedData=[];
                    function render(data) {
                        var d3 = window.d3;
                        //test dataset example
                        /*data = [
                            { State: 'CT', ExpensesCount: 61 }, { State: 'NY', ExpensesCount: 1 }, {
                                State: 'MA',
                                ExpensesCount: 4
                            }
                        ];*/


                        var dataOptions = {
                            scope: 'usa',
                            element: element.find('.map')[0],
                            fills: {
                                HIGH: '#FF8888',
                                LOW: '#AA8888',
                                MEDIUM: 'CC8888',
                                UNKNOWN: 'rgb(0,0,0)',
                                BUBBLE: 'rgb(100,0,0)',
                                defaultFill: 'silver'
                            },
                            data: {

                            },
                            geographyConfig: {
                                highlightBorderColor: '#bada55',
                                popupTemplate: function(geography, data) {
                                    return '<div class="expensesummaryhover">' + geography.properties.name
                                        +
                                        '    <em>Expense(s)</em>:' +
                                        (data !== null ? data.ExpensesCount : 'N/A') + ' </div>';
                                },
                                highlightBorderWidth: 3
                            },
                            bubblesConfig: {
                                borderWidth: 0,
                                borderColor: 'rgba(0,0,0,0.3)',
                                popupOnHover: true,
                                fillOpacity: 0.55,
                                highlightOnHover: true,
                                highlightFillColor: '#FC8D59',
                                highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
                                highlightBorderWidth: 2,
                                highlightFillOpacity: 0.85
                            }
                        };
//colorize heatmap
                        var colours = [
                            "#DD73B4", "#7373FF", "#93A3FF",
                            "#93E3FF", "#A3FFFB", "#B3FFCB",
                            "#63FF9B", "#63FF6B", "#7BFF63",
                            "#BBFF63", "#CBFF63", "#DBFFA3",
                            "#DDE3A3", "#DDC3A3", "#DD93A3", "#4333FF", "#DD8363"
                        ];

                        var heatmapColour = d3.scale.linear()
                            .domain(d3.range(0, 1, 1.0 / (colours.length - 1)))
                            .range(colours);

                        // dynamic bit...
                        var c = d3.scale.linear().domain(d3.extent([0, 300])).range([0, 1]);



                        for (var i = 0; i < data.length; i++) {
                            var val = data[i];
                            dataOptions.data[val.State] = { fillKey: 'Fill' + val.State, ExpensesCount: val.ExpensesCount };
                            dataOptions.fills['Fill' + val.State] = heatmapColour(c(val.ExpensesCount*10));
                        }
                        dataOptions.done = function(datamap) {
                          var resizeTimeout=null;
                          $(window).resize( function() {
                            if(resizeTimeout){
                              $timeout.cancel(resizeTimeout);
                            }
                            resizeTimeout=$timeout( function() {
                              resizeTimeout=null;
                              element.find('svg').remove();
                                render(cachedData);
                              },400);
                          });

                            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                                scope.$apply(function() {
                                    scope.expenseComplexFilter ={
                                        provider:{
                                              state:geography.id
                                        }
                                    };
                                  });
                            });

                        };
                        var map = new Datamap(dataOptions);
                    }

                    $http.get('/expenseSummary').success(function (result) {
                        var data = [], x;
                        for(x in result.result)
                        {
                            data.push({ State: x, ExpensesCount: result.result[x] });

                        }
                        cachedData = data;
                        render(data);
                    });
                }

            };


        }
    ]);

}());
