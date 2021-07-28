const net = require('net');

//we create server with all the default option
const server = net.createServer(function(){
  console.log("someone has connected")

})
//we make server listen to connections
server.listen(3001,function(){ //port
console.log("server is listen");
})
