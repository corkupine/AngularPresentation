(function() {
    "use strict";

    var wex1ViewApp = angular.module("wex1View", [
        "ngRoute"
    ]);

    wex1ViewApp.config([
        "$routeProvider", "$locationProvider",
        function($routeProvider) {
            $routeProvider.
                when("/expenses", {
                    templateUrl: "partials/expenses.html",
                    controller: "ExpensesSearchCtrl"
                }).
                when("/expenses/:expenseId", {
                    templateUrl: "partials/expense-detail.html",
                    controller: "ExpenseDetailCtrl"
                }).
                otherwise({
                    redirectTo: "/expenses"
                });
        }
    ]);

    wex1ViewApp.controller("ExpensesSearchCtrl", [
        "$scope", "$http", function($scope, $http) {
            $scope.model = {};
            $http.get('/expenses').success(function(returnval) {
                $scope.model.expenses = returnval;
            });
        }
    ]);

    wex1ViewApp.controller("ExpenseDetailCtrl", [
        "$scope", "$http", "$routeParams", function($scope, $http, $routeParams) {
            $scope.model = {};
            $http.get('/expenses').success(function(returnval) {
                $scope.model.expense = $.grep(returnval, function(e) { return e.id == $routeParams.expenseId; })[0];
            });
            $scope.model.backtext = "Back To List";
        }
    ]);
}());