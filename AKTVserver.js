var express = require("express");
var app = express();
var port = 3000;
var dayAvailable = [];
var name;
//receive request from the client side
app.post('/post',(req,res) => {
    res.header("Access-Control-Allow-Origin","*");
    console.log("New express client");
    console.log("Received: ");
    //console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);
    //check if the request action is evaluatePassword
    const currentList = [];
    var jsontext;
    if (z['action'] == "createProfile") {
            var jsontext = JSON.stringify({
                'action':'createDone',
                'msg':'Profile created'
            });
        console.log(jsontext);
        res.send(jsontext);
        }
}
  
).listen(3000);
console.log("Server is running!");
