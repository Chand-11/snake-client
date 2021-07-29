const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    conn.Name = 'Name: JAN';
  
    conn.write(conn.Name);
    
  });
  
  conn.on('data', (data) => {
       console.log('Message from client: ', data)
    console.log("Successfully connected to game server");
    conn.write("Move: up");
    // for (let i = 1; i < 20; i++) {
    //   setTimeout(()=> {
    //     conn.write('Move: up')
    //   }, 500 * i)
    // } 
  });

  return conn;
};


module.exports = connect;