
var express = require("express");
var app = express();
var entryList = [];
var bolD = false;
var italiC = false;
var underlinE = false;
const passwordList = [];
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
    if (z['action'] == "storePassword") {
        passwordList.push(z['newPassword']);
        var jsontext = JSON.stringify({
            'action':'storePassword',
            'passwordList':passwordList,
            'msg':'The password has been stored!'
        });
        console.log(jsontext);
        res.send(jsontext);
    }
    else if (z['action'] == 'checkPassword') {
        var jsontext = JSON.stringify({
            'action':'checkPassword',
            'passwordList':passwordList,
            'msg':'This is the list of passwords stored'
        });
        console.log(jsontext);
        res.send(jsontext);
    }
    /*else if (z['action'] == 'openHomepage') {
        var jsontext = JSON.stringify({
                'action': 'openHomepage',
                'msg': 'Open the homepage!'
            });
            console.log(jsontext);
            res.send(jsontext);
        }
    else if (z['action'] == 'accessNewEntry') {
        jsontext = JSON.stringify({
            'action':'useData',
            'username':username,
            'msg': 'Integrate this data to current client script'
        });
        console.log(jsontext);
        res.send(jsontext);
    }*/
    else if (z['action'] == 'saveContent') {
        //noOfEntry = noOfEntry + 1;
        entryList.push(z['content']);
        bolD = z['bold'];
        italiC = z['italic'];
        underlinE = z['underline'];
        var jsontext = JSON.stringify({
            'action': 'saveContent',
            'content': entryList,
            'bold':bolD,
            'italic':italiC,
            'underline':underlinE,
            'msg': 'Current content has been saved'}); 
        console.log(jsontext);
        res.send(jsontext);
        }
    else if (z['action'] == 'sendContent') {
        var jsontext = JSON.stringify({
            'action': 'sendContent',
            'content': entryList,
            'bold':bolD,
            'italic':italiC,
            'underline':underlinE,
            'msg': 'Current content has been saved'}); 
        console.log(jsontext);
        res.send(jsontext);
    }
}
).listen(3000);
console.log("Server is running!");
