var yodar = document.getElementById("r-body").style.transform = "rotate(" + rotate + "deg)";
var yodas = document.getElementById("y-body").style.transform = "scale(" + size + "," + size + ")";

if (cup == true) {
    document.getElementById("cup").style.background = "#602c2c";
}

if (cup == false) {
    document.getElementById("steam").style.visibility = "hidden";
}