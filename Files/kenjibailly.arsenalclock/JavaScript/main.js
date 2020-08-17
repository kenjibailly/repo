function init() {

        var widget = $(".Widget");

        if ( size == 100 ){
          widget.css('-webkit-transform','scale(1.0)');
        }
        if ( size == 90 ){
          widget.css('-webkit-transform','scale(0.9)');
          widget.css('left','-20px');
        }
        if ( size == 80 ){
          widget.css('-webkit-transform','scale(0.8)');
          widget.css('left','-30px');
        }
        if ( size == 75 ){
          widget.css('-webkit-transform','scale(0.75)');
          widget.css('left','-35px');
        }
        if ( size == 65 ){
          widget.css('-webkit-transform','scale(0.65)');
          widget.css('left','-45px');
        }
        if ( size == 55 ){
          widget.css('-webkit-transform','scale(0.55)');
          widget.css('left','-55px');
        }
        if ( size == 45 ){
          widget.css('-webkit-transform','scale(0.45)');
          widget.css('left','-65px');
        }
 }

 init();
