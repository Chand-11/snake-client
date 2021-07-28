const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: 50542, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    conn.Name = 'Name: BCC';
    conn.write('Hello from client!');
    conn.write(conn.Name);
  });
  
  // conn.on('data', (data) => {
  //   //console.log("Successfully connected to game server");
  //   console.log(data);
  // });

  return conn;
};

// establishes a connection with the game server

// console.log("Connecting ...");
// connect();

module.exports = connect;