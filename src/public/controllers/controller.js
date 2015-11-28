/*
 * controller.js
 * Copyright (C) 2015 vishalapr <vishalapr@vishalapr-Lenovo-G50-70>
 *
 * Distributed under terms of the MIT license.
 */

var myApp=angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',
function($scope,$http) {
	console.log("CONTROLLER WORKS");
}]);
