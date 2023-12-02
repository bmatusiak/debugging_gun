module.exports = function(gun){
    
    setInterval(function(){
        gun.get("heartBeat").get("time").put(+new Date)
    },5000)
    
}