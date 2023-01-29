var express = require("express");
var app = express();
var port = 3000;
var dayAvailable = [];
var name; var major;
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
        name = z['name'];
        major = z['major'];
        for (var i = 0; i < z['day'].length;i++) {
            dayAvailable.push(z['day'][i]);
        }
        var jsontext = JSON.stringify({
        'action':'createDone',
        /*'name': z['name'],
        'major':z['major'],*/
        'msg':'createDone'
        });
        console.log(jsontext);
        res.send(jsontext);

    }

    else if (z['action']=="changeProfileInfo") {
        var jsontext = JSON.stringify({
            'action':'profileChanged',
            'name': name,
            'major':major,
            'msg':'profileChanged'
            });
            console.log(jsontext);
            res.send(jsontext);
        }
}
  
).listen(3000);
console.log("Server is running!");
