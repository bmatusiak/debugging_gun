
var Gun = require("gun");
var _SEA = require("gun/sea");
console.log(_SEA);

var opts = {};
opts.peers = [
    // "https://gun-manhattan.herokuapp.com/gun"
    "http://localhost:8190/gun",
    "http://localhost:8191/gun",
    // "http://localhost:8192/gun",
]

require("gun/lib/radix.js");
require("gun/lib/radisk.js");
require("gun/lib/store.js");
require("gun/lib/rindexed.js");

opts.store = {};//nomem
opts.store.put = function (file, data, cb) { cb(null, -10) }; // dev/null!
opts.store.get = function (file, cb) { cb(null) };
opts.file = false;
opts.localStorage = false;

var gun = Gun(opts)

window.gun = gun;

gun.get("init").get("time").put("t-" + new Date().getTime())

var pingCounter = 0;
setInterval(() => {
    var peers = gun._.opt.peers
    for (var i in peers){
        var peer = peers[i];
        console.log(peer.id)
    }
    console.log("pingCounter",pingCounter)
}, 5000)

gun.get("heartbeat").get("pingpong").get("ping").on(function(who){
    pingCounter += 1;
    gun.get("heartbeat").get("pingpong").get("pong").put("time-" + new Date().getTime())
})