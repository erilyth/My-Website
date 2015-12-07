/*
 * server.js
 * Copyright (C) 2015 vishalapr <vishalapr@vishalapr-Lenovo-G50-70>
 *
 * Distributed under terms of the MIT license.
 */

var express = require('express');
var app = express();

app.use(express.static(__dirname+"/public"));

app.get('/instructables', function(reqest, response){
	var spawn = require('child_process').spawn;
	var process = spawn('python',["./instructables.py"]);
	var instructableList = [];
	process.stdout.on('data',function(data){
		namesList = data.toString('utf8').split(/\r?\n/)
		for (var i=0;i<namesList.length;i++){
			if (namesList[i]!="")
			{
				instructable={
					name: namesList[i].split(',')[2],
					url: namesList[i].split(',')[1],
					image: namesList[i].split(',')[0],
				}
				instructableList.push(instructable);
			}
		}
	});
	process.stdout.on('close', function( ){
		console.log(instructableList);
		response.json(instructableList);
	});
});

app.listen(8080);
console.log("Server running on port 8080");
