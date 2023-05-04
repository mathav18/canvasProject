// "use strict";
var X = 10;
var Y = 15;
var uesrText = '';




( function (ctx) { 

   

     ctx.setPosition  = function ( element ) {

        element.name == 'left' ? ( X = element.value ) : ( Y = element.value )
       
        if (window.CANVAS_PAINTER.text ) {
        
        textDraw ( X, Y, uesrText , window.CANVAS_PAINTER, CANVAS_STYLE );
        } else {
            drawShape(undefined,window.currentCanvas, X, Y , true)
        }
    }
    
    
  ctx.changeColor = function ( element )  {
    
        CANVAS_STYLE.COLOR = element.value;
    
        if( window.CANVAS_PAINTER.text ) {
    
        textDraw(X, Y ,uesrText , MY_OBJ, CANVAS_STYLE);
        
        } else {
            drawShape(undefined,window.currentCanvas, X, Y)
        }
    }

} (this) )





