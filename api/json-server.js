const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '..', 'data', 'cities.json')); // Points to the cities.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
