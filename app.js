const http = require('http');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "bf0ff675c8b20a",
    password: "09053071",
    database: "heroku_ae0b253dd96f272"
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE Messan (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

//mysql://bf0ff675c8b20a:09053071@us-cdbr-iron-east-01.cleardb.net/heroku_ae0b253dd96f272?reconnect=true


