'use strict';

// var app = angular.module("myFoodTracker", ["ngRoute", "ngAnimate"]);
var app = angular.module("myFoodTracker", ["ngRoute", "ngMaterial"]);
var templateFolder = 'partials/';

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
    	templateUrl : templateFolder + "mainView.htm",
        controller : "myCtrlMain"
    })
    .when("/detail/:day", {
    	templateUrl : templateFolder + "detailView.htm",
        controller : "myCtrlDetail"
    });
});

// var app = angular.module("myFoodTracker", []);