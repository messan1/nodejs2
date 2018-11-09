const http = require('http');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "bf0ff675c8b20a",
    password: "09053071"
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
const port=process.env.PORT || 3000
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Hello World</h1>');
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});


//mysql://bf0ff675c8b20a:09053071@us-cdbr-iron-east-01.cleardb.net/heroku_ae0b253dd96f272?reconnect=true


