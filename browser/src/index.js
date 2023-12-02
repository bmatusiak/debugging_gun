console.log("Hello World!");


var Gun = require("gun/gun");
require("gun/sea");

var gun = Gun({
    peers: [
        "http://localhost:8081/gun",
        // "http://localhost:8082/gun",
        // "http://localhost:8083/gun"
    ]
})


window.gun = gun;

gun.get("heartBeat").get("time").on((d) => {
    console.log(d)
})