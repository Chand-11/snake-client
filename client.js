const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: 50542, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    conn.Name = 'Name: JAN';
    conn.write('Hello from client!');
    conn.write(conn.Name);
  });
  
  conn.on('data', (data) => {
    
   // console.log('Message from client: ', data)
    //console.log("Successfully connected to game server");
    conn.write("Move: up");
    for (let i = 1; i < 20; i++) {
      setTimeout(()=> {
        conn.write('Move: up')
      }, 500 * i)
    } 
  });

  return conn;
};


module.exports = connect;