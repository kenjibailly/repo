function init(){
    var verb = new VerbalDate(hours12format);
    var hours12format = false;
    var textFormat = true;
    var hour = verb.getHour() + " " + verb.getMinute();
    document.getElementById("byline").innerHTML = hour;
    setTimeout("init();", 1000);
}
var starwarsdemo = document.getElementById("starwars-demo");
starwarsdemo.style.transform = "scale(" + size + "," + size + ")";