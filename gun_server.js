//npm install jsdom express gun


const path = require('path');

//gun
var gun_dir = path.dirname(require.resolve("gun"))
var Gun = require("gun");
var gun_app = require(process.cwd() + "/app.js");

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


var gun_opt = gun_app.opt || {};

gun_opt.file = gun_opt.file || process.env.RADATA_PATH || "radata";
if(gun_opt.file == "radata"){
    console.log(e= "env RADATA_PATH must me set");
    throw e
}
if(gun_opt.file == "false"){
    gun_opt.file = false;
}
gun_opt.web = server;
gun_opt.axe = false;
gun_opt.multicast = false

//gun/server logic
var gun = Gun(gun_opt)

server.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function(){
    console.log("listening", process.env.PORT || 8080, process.env.IP || "0.0.0.0")
});

gun_app(gun)
