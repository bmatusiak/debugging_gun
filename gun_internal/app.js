function App(gun) {
    setInterval(() => {
        gun.get("heartbeat").get("pingpong").get("ping").put("time-" + new Date().getTime());
        console.log("ping",pongCouner)
    }, 1000);
    var pongCouner = 0;
    gun.get("heartbeat").get("pingpong").get("pong").on(function(){
        pongCouner += 1;
        console.log("pong")
    })
}

module.exports = App;