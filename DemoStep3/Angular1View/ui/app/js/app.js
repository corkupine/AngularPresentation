﻿var app = angular.module("wex1View", []);

app.controller("ExpensesSearchCtrl", [
    "$scope", function ($scope) {
        $scope.model = {};
        $scope.model.expenses = [
             {
                 id: 1,
                 category: "Pharmacy",
                 description: "Pain reliever",
                 date: "2011-01-18T18:25:43.511Z",
                 amount: "10.20"
             },
            {
                id: 2,
                category: "Pharmacy",
                description: "Bandages",
                date: "2012-02-19T18:25:43.511Z",
                amount: "5.3"
            },
            {
                id: 3,
                category: "Dental",
                description: "Cleaning",
                date: "2013-03-23T18:25:43.511Z",
                amount: "150"
            },
            {
                id: 4,
                category: "Pharmacy",
                description: "Cold medicine",
                date: "2012-04-23T18:25:43.511Z",
                amount: "13.65"
            },
            {
                id: 5,
                category: "Chiropractic",
                description: "Adjustment",
                date: "2014-08-21T18:25:43.511Z",
                amount: "110.85"
            },
            {
                id: 6,
                category: "Dental",
                description: "Filling",
                date: "2014-10-23T18:25:43.511Z",
                amount: "85.25"
            }
        ];
    }
]);