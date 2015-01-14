(function () {
    "use strict";
    var wex1ViewApp = angular.module("wex1View", [
        "ngRoute"
    ]);

    wex1ViewApp.config([
        "$routeProvider", "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $routeProvider.
                when("/expenses", {
                    templateUrl: "app/partials/expenses.html",
                    controller: "ExpensesSearchCtrl"
                }).
                when("/expenses/:expenseId", {
                    templateUrl: "app/partials/expense-detail.html",
                    controller: "ExpenseDetailCtrl"
                }).
                otherwise({
                    redirectTo: "/expenses"
                });
            /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
       */
        }
    ]);

    wex1ViewApp.controller("ExpensesSearchCtrl", [
        "$scope", "$http", function ($scope, $http) {
            $scope.expenses = [];
            $http.get('expenses').success(function (result) {
                $scope.expenses = result.result;
            });
        }
    ]);

    wex1ViewApp.controller("ExpenseDashboardCtrl", [
        "$scope", "$http", function ($scope, $http) {

            $scope.clearFilters = function(){
              $scope.searchText = '';
              $scope.expenseComplexFilter={};
            }
            $scope.clearFilters();
        }
    ]);

}());
