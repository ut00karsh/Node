var mqtt= require('mqtt');
var fs=require('fs');
//var client  = mqtt.connect("mqtt://10.132.94.13:1883");
var client  = mqtt.connect("mqtt://192.168.0.121:1883");
var path="info.json";

client.on("connect",function()
{	
    console.log("connected  "+ client.connected);
    
    client.subscribe("image",function(err)
    {

                 if(err){throw err;}
                 else
                 {
                     console.log("no error");
                 }
                
    }); 

});

client.on('message',function(topic, message)
{
 /*
  //  var data=JSON.parse(message.toString());
    for(var i in data)
    {
         base64_decode(data[i],i);
    }
    console.log(data);
    try{
        if(fs.existsSync(path))
        {
           fs.readFile(path,function(err,data){
                var employees=JSON.parse(data);
                employees.push(JSON.parse(message));
                fs.writeFile(path,JSON.stringify(employees),function(err){
                    if(err){throw err;}
                    console.log("message is "+ message.toString());
                });
            });}
      
        else
        {
            var employees=[];
            employees.push(JSON.parse(message));
            fs.writeFile(path,JSON.stringify(employees),function(err){
                if(err){throw err;}
                console.log("message is "+ message.toString());
            });
        }
       }catch(err){
        console.log(err.message);
    }
    
   
 let buff = new Buffer(message, 'base64');
 console.log(buff);
 let text = buff.toString('ascii');
 console.log(text);
 */

   fs.writeFileSync('abc.txt',message);
   console.log("file accepted successfully");
});


client.on("error",function(error){
    console.log("Can't connect" + error);
    process.exit(1)});




function base64_decode(base64str, fileName) {

    var decodeData = new Buffer(base64str, 'base64');
    fs.appendFile(fileName,decodeData,function(err){
        if(err){
            console.log(err.message);
        }
        else{
            console.log("file accepted successfully");
        }
    });

}
    