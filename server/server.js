const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
    console.log("Get method");
    res.send("Hello");
});

app.post('/enroll', function(req,res){
    console.log(req.body);
    res.status(200).send({"messsage": "Data recieved"});
})

app.listen(3200, function(){
    console.log("Server running....")
})