const express = require("express");

const routes = require("./routes");

const server = express();
server.use(express.json());
//Allows us to host static files with static being the name of the folder 
server.use(express.static('static'));


const mustacheExpress = require('mustache-express');
server.engine('mustache', mustacheExpress());
server.set('view engine', 'mustache');

server.use(routes);

module.exports = server;


