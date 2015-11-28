/*
 * server.js
 * Copyright (C) 2015 vishalapr <vishalapr@vishalapr-Lenovo-G50-70>
 *
 * Distributed under terms of the MIT license.
 */

var express = require('express');
var app = express();

app.use(express.static(__dirname+"/public"));

app.listen(3000);
console.log("Server running on port 3000");
