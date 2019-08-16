var mqtt    = require('mqtt');
var fs=require('fs');
var client  = mqtt.connect("mqtt://192.168.0.121:1883");
//var client  = mqtt.connect("mqtt://10.132.94.202:1883");

client.on("connect",function(){	
    console.log("connected  "+ client.connected);
});

client.on("error",function(error){
    console.log("Can't connect" + error);
    process.exit(1)
});


function publishMessage(topic)
{
    console.log("publishing");

    if (client.connected == true)
    {
    /*
        var count=0;
        var readerStream = fs.createReadStream('apple.jpeg');
        readerStream.setEncoding('base64');
        readerStream.on('data', function(chunk) {  
            message += chunk;  
         });
        readerStream.on('data', function(chunk) 
        {
            count+=1;
            message=JSON.stringify({"data":[{"filename":"new_apple.jpeg","chunkid":count,"chunkdata":chunk}]});
        });
    */
   var message="";
   var readerStream = fs.createReadStream('input.txt');
   readerStream.setEncoding('UTF8');
   readerStream.on('data', function(chunk) 
    {  
       message += chunk;  
    });

    readerStream.on('end',function() {
        console.log(message);
        client.publish(topic,message);
        console.log("file send successfully");
    });
    
    readerStream.on('error', function(err) {
        console.log(err.stack);
    });

    }

}

var topic="image";
setInterval(function(){publishMessage(topic);},5000);
