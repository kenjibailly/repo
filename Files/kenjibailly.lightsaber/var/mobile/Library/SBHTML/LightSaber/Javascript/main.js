//animated
var animated = document.getElementById('animated');
if (move == true){
    animated.classList.add("animated");
    animated.style.animation = "animated " + speed + "s linear infinite";
}

//color
var light = document.getElementById('light');
light.style.boxShadow = "0 0 5px #fff,0 0 8px #fff,0 0 12px #fff,0 0 15px " + color + ",0 0 25px " + color + "";

//size
var container = document.getElementById('container');
container.style.transform = "scale(" + size + "," + size + ")";

//rotate
var rotateL = document.getElementById('rotate');
rotateL.style.transform = "rotate(" + rotate + "deg)";