
$(document).ready(function() {

      setInterval( function() {

        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        var hdegree = hours * 30 + (mins / 2);
        var hrotate = "rotate(" + hdegree + "deg)";
        $(".hour,").css("-webkit-transform", hrotate );

      }, 1 );



      setInterval( function() {

        var mins = new Date().getMinutes();
        var mdegree = mins * 6;
        var mrotate = "rotate(" + mdegree + "deg)";
        $(".min,").css("-webkit-transform", mrotate );

      }, 1 );

});
