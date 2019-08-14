var express = require('express');
var app = express();
var fs = require("fs");
var user = {
    
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }

 function writeErrorLog(error)
 {
    if (fs.existsSync(__dirname + "/" +'error.txt')) 
    {
        
fs.appendFile('error.txt', error, function (err) {
    if (err) throw err;
    //console.log('Updated!');
  });
}
else
{
    fs.writeFile('error.txt', error, function (err) {
        if (err) throw err;
        //console.log('Saved!');
      });
}
}

 function writeInfoLog(info)
 {
     info =info+'\r\n'
    if (fs.existsSync( __dirname + "/" +'info.txt')) 
    {
        
fs.appendFile('info.txt', info, function (err) {
    if (err) throw err;
    //console.log('Updated!');
  });
}
else
{
    fs.writeFile('info.txt', info, function (err) {
        if (err) throw err;
        //console.log('Saved!');
      });
}
    
 } 

app.get('/listUsers', function (req, res) 
{
    try
    {
   fs.readFile( __dirname + "/" + "info.json", 'utf8', function (err, data) {
       if(err)
       {
        throw(err);
       }
      console.log( data );
       writeInfoLog("listUsers api is called");
      res.end( data );
   });}
   catch(err){
    writeErrorLog(err.message);
   }
})

 
 app.post('/addUser', function (req, res) 
 {
    try{
    fs.readFile( __dirname + "/" + "info.json", 'utf8', function (err, data) 
    {
        if(err)
        {
            throw(err);
        }
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       writeInfoLog("addUser api is called");
       res.end( JSON.stringify(data));
    });}
catch(err){
    writeErrorLog(err.message);
}})


 app.get('/listbyuser:id', function (req, res) {
     try{
    fs.readFile( __dirname + "/" + "info.json", 'utf8', function (err, data) 
    {
        if(err)
        {
            throw(err);
        }

       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       writeInfoLog("listbyuser api is called");
       res.end( JSON.stringify(user));
    });}
    catch(err){
        writeErrorLog(err.message);
    }
 })



var server = app.listen(8081, function () 
{
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})