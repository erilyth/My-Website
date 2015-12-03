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
		console.log(data.toString('utf8'));
		namesList = data.toString('utf8').split(/\r?\n/)
		console.log(namesList);
		for (var i=0;i<namesList.length;i++){
			if (namesList[i]!="")
			{
				instructable={
					name: namesList[i]
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


app.get('/contactlist', function (request,response) { //Creating a new route 'contactlist'
	console.log("I recieved a get request");
	person1={
		name: 'Vishal'
	}
	person2={
		name: 'Erilyth'
	}
	person3={
		name: 'Harsha'
	}
	var contactList=[person1,person2,person3];
	response.json(contactList); //Whatever calls for data using this get request (using the route 'contactlist') will get this response back.
});

app.listen(3000);
console.log("Server running on port 3000");
