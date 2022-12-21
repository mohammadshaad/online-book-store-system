//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/login", function (req, res) {
    res.sendFile(__dirname + "/login.html");

});

app.post("/login", function (req, res) {
    res.sendFile(__dirname + "/login.html");
});

app.get("/register", function (req, res) {
    res.sendFile(__dirname + "/register.html");

});

app.post("/register", function (req, res) {
    res.sendFile(__dirname + "/register.html");
});

app.get("/about", function (req, res) {
    res.sendFile(__dirname + "/about.html");

});

app.post("/about", function (req, res) {
    res.sendFile(__dirname + "/about.html");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/register.html");
});


app.post("/", function (req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const pass = req.body.password;

    res.sendFile(__dirname + "/index.html");

    let fName = req.body.fName;

    // res.redirect("/");

    // const jsonData = JSON.stringify(data);

    // const url = "https://us21.api.mailchimp.com/3.0/lists/581364c71e";

    // const options = {
    //     method: "POST",
    //     auth: "shaad:bbbcd6564f6545286e94bd244b8e81a3-us21",
    // }

    // const request = https.request(url, options, function(response){

    //     if (response.statusCode === 200) {
    //         res.sendFile(__dirname + "/success.html");
    //     }

    //     else
    //     {
    //         res.sendFile(__dirname + "/failure.html");
    //     }


    //     response.on("data", function(data){
    //         console.log(JSON.parse(data));
    //     })
    // })

    // request.write(jsonData);
    // request.end();


})


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});


// API Key
// bbbcd6564f6545286e94bd244b8e81a3-us21


// Audience ID
// 581364c71e