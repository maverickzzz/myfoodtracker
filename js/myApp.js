'use strict';

var app = angular.module("myFoodTracker", ["ngRoute"]);
var templateFolder = 'template/';

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : templateFolder + "mainView.htm",
        controller : "myCtrl"
    });
});