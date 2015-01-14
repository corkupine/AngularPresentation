(function () {
    "use strict";
    var wex1ViewApp = angular.module("wex1View", [
        "ui.router"
    ]);

    wex1ViewApp.config([
        "$stateProvider", "$urlRouterProvider", "$locationProvider",
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
          $stateProvider
              .state( "expenses",
                  {
                    url: "/expenses",
                    templateUrl: "app/partials/expenses.html",
                    controller: "ExpensesSearchCtrl"
                  })
              .state( "expenses.detail",
                  {
                    url: "/:expenseId",
                    templateUrl: "app/partials/expense-detail.html",
                    controller: "ExpenseViewCtrl"
                  })
                  .state( "expenses.detail.edit",
                      {
                        url: "/edit",
                        templateUrl: "app/partials/expense-edit.html",
                        controller: "ExpenseEditCtrl"
                      });
           $urlRouterProvider.otherwise('/expenses');

        }
    ]);

    wex1ViewApp.controller("ExpensesSearchCtrl", [
        "$rootScope", "$state", "$scope", "$location", "$http", function ($rootScope, $state, $scope, $location, $http) {
            $scope.expenses = [];
            $scope.showDetail = function(expense) {
              for(var i=0;i<$scope.expenses.length; i++ ) {
                $scope.expenses[i]._showDetails = false;
              }
              $location.path("/expenses/"+expense.id);
              $scope.expandDetails(expense.id);
            }
            $scope.expandDetails = function(expenseId){
              for(var i=0;i<$scope.expenses.length; i++ ) {
                if($scope.expenses[i].id == expenseId) {
                  $scope.expenses[i]._showDetails = true;
                }
                else {
                  $scope.expenses[i]._showDetails = false;

                }
              }
            }
            function initCurrentState() {
              if($state.current.name.indexOf('expenses.detail') ==0 ) {
                $scope.expandDetails($state.params.expenseId);
              }
            }

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams)
            {
              if(toState.name.indexOf('expenses.detail') ==0){
                if(toParams.expenseId) {
                  $scope.expandDetails(toParams.expenseId);
                }
              }
            });

            $http.get('expenses').success(function (result) {
                $scope.expenses = result.result;
                initCurrentState();

            });
        }
    ]);


    wex1ViewApp.controller("ExpenseViewCtrl", [
        "$scope", "$http", "$location", "$stateParams", function ($scope, $http, $location, $stateParams) {
            $scope.ExpenseId = $stateParams.expenseId;
            $scope.editExpense = function(expense){
              $location.path("/expenses/"+expense.id+"/edit");
            }
        }
    ]);

    wex1ViewApp.controller("ExpenseEditCtrl", [
        "$scope", "$http", "$stateParams", function ($scope, $http, $stateParams) {

        }
    ]);

    wex1ViewApp.controller("ExpenseDashboardCtrl", [
        "$scope", "$http", function ($scope, $http) {
            $scope.searchText = '';
            $scope.expenseComplexFilter={};
        }
    ]);


}());
