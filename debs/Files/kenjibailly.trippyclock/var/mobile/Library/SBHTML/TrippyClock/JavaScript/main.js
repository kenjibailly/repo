$(document).ready(function() {

        var widget = $(".Widget");

        if ( size == 100 ){
          widget.css('-webkit-transform','scale(0.44)');
        }
        else if ( size == 90 ){
          widget.css('-webkit-transform','scale(0.39)');
        }
        else if ( size == 80 ){
          widget.css('-webkit-transform','scale(0.35)');
        }
        else if ( size == 75 ){
          widget.css('-webkit-transform','scale(0.33)');
        }
        else if ( size == 50 ){
          widget.css('-webkit-transform','scale(0.25)');
        }
        else {
          widget.css('-webkit-transform','scale(0.44)');
        }
});
