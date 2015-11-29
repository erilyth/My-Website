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
	$http.get('/contactlist').success(function(response) { //Send a get request to the server to get the data.
		console.log("I got the data requested");
		$scope.contactList=response; //Put the data on the global scope so the views can display them.
	});
}]);
