var mysql  = require('mysql');
var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root'
});

dbconn.connect(function(err){
  if(err){
    console.log('Database connection error');
  }else{
    console.log('Database connection successful');
    dbconn.query("CREATE DATABASE bank_db", function(error){
      if(error){
        console.log(error + " creating database failed");
      }else{
        console.log("bank_db created successfully");
      }
      dbconn.end(function(error){
        if(error){
          console.log("Database connection close failed");
        }
      });
    });

  }
});


