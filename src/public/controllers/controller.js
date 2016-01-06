/*
 * controller.js
 * Copyright (C) 2015 vishalapr <vishalapr@vishalapr-Lenovo-G50-70>
 *
 * Distributed under terms of the MIT license.
 */

var myApp=angular.module('instructablesApp',['app.directives.project']);

myApp.controller('instructablesCtrl',['$scope','$http',
function($scope,$http) {
	console.log("CONTROLLER WORKS");
	$http.get('/instructables').success(function(response) { //Send a get request to the server to get the data.
		console.log("I got the data requested");
		$scope.instructableList=response; //Put the data on the global scope so the views can display them.
	});
}]);

var homeApp=angular.module('homeApp',[]);

homeApp.controller('menuCtrl',['$scope','$http',
function($scope,$http) {
    console.log("MENU CONTROLLER WORKS");
    var imgs=$('.menuIcon');
    imgs.each(function() {
        $(this).css({
            'display': 'none'
        });
    })
}]);