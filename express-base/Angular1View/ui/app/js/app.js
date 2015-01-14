"use strict";

/* App Module */

var wex1ViewApp = angular.module("wex1View", [
    "ngRoute"
]);

wex1ViewApp.config(["$routeProvider", "$locationProvider",
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
  }]);


// example directly using $http service
wex1ViewApp.controller("ExpensesSearchCtrl", [
    "$scope","$http", function($scope, $http) {
        $scope.expenses = [];
        $http.get('expenses').success(function(result) {
            $scope.expenses = result.result;
        });
    }
]);


/*
//example if using a service for Expenses rather than using $http
wex1ViewApp.service("ExpenseService", ["$http", function($http) {
    this.GetExpenses = function () {
        return $http.get('expenses');
    }

}]);

wex1ViewApp.controller("ExpensesSearchCtrl", [
    "$scope","$http", "ExpenseService", function($scope, $http, ExpenseService) {
        $scope.expenses = [];
        ExpenseService.GetExpenses().success(function(result) {
            $scope.expenses = result.result;
        })
    }
]);

*/