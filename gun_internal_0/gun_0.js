//npm install jsdom express gun


const path = require('path');

//.env
var GUN_PEER = "CHANGE ME";

//gun
var gun_dir = path.dirname(require.resolve("gun"))
var Gun = require("gun");

//server/express
var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.use("/gun", express.static(gun_dir));//serve gun files

//gun stats page
//example url = http://localhost:8080/gun/stats.html
app.use("/gun", (req, res, next) => {
    if (req.originalUrl == "/gun" || req.originalUrl == "/gun/" || req.originalUrl == "/gun/stats")
        res.redirect("/gun/stats.html")
    else
        next();
});
app.use("/gun/", express.static(gun_dir + '/examples'));

app.use(express.static('public'));;//if you want to serve stuff public folder


//gun/server logic
var gun = Gun({ 
    web: server, 
    peers: [GUN_PEER] ,
    axe:false,
    multicast:false
})

gun.get("some").get("important").get("key").on(function (data, $g) {
    console.log(data);
});

server.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0");
console.log("listening")

require("./test.js")(gun)
