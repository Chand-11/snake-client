const net = require("net");
const connect = require('./client.js');
const setupInput = require('./input.js');




  console.log("Connecting ...");
  let input = connect();
  setupInput(input);