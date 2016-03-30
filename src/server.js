/*
 * server.js
 * Copyright (C) 2015 vishalapr <vishalapr@vishalapr-Lenovo-G50-70>
 *
 * Distributed under terms of the MIT license.
 */

var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.use(express.static(__dirname+"/public"));

app.get('/myprojects', function(req, res){
	var projectList = [];
	var project = {name:'test', url:'https://www.google.com', image:'images/instructables.png', description:'Description'};
	var project2 = {name:'test', url:'https://www.google.com', image:'images/instructables.png', description:'Description'};
	projectList.push(project);
	projectList.push(project2);
	res.json(projectList);
});

app.get('/instructables', function(req, res){
	url = "http://www.instructables.com/member/vishalapr/?show=INSTRUCTABLES&limit=100&sort=FEATURED";
	var instructableList = [];
	var names = [];
	var urls = [];
	var images = [];
	var isProxy=0;
	var proxiedRequest = request.defaults({});
	request(url, function (error, response, html) {
		if(error){
			proxiedRequest = request.defaults({proxy:'http://www.proxy.iiit.ac.in:8080'});
		}
	});
	proxiedRequest(url, function (error, response, html) {
  		if (!error) {
    		var $ = cheerio.load(html);
   			var dataM = $('div#omni div.container div#member-content div#member-centercontent div.sortable-box div.projects ul.h-list li div.member-cover-item div.cover-info span.title a');
			dataM.each(function(i, element){
      			console.log($(this).text());
				console.log("http://www.instructables.com"+$(this).attr('href'));
				names.push($(this).text());
				urls.push("http://www.instructables.com"+$(this).attr('href'));
    		});
			var dataM2 = $('div#omni div.container div#member-content div#member-centercontent div.sortable-box div.projects ul.h-list li div.member-cover-item a.cover-image img');
			dataM2.each(function(i, element){
				console.log($(this).attr('src'));
				images.push($(this).attr('src'));
			});
			for(i=0;i<12;i++){
				var instructable = {
					name: names[i],
					url: urls[i],
					image: images[i]
				}
				console.log(instructable);
				instructableList.push(instructable);
			}
			res.json(instructableList);
  		}
	});
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(server_port,server_ip_address,function() {	
	console.log("Server running");
});
