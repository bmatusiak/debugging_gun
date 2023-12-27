App.opt = {};
App.opt.file = "false";

App.opt.store = {};//nomem
App.opt.store.put = function (file, data, cb) { cb(null, -9) }; // dev/null!
App.opt.store.get = function (file, cb) { cb(null) };

App.opt.peers = ["http://localhost:8180/gun"]
function App(gun) {
    
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
}

module.exports = App;