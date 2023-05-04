// "use strict";

var uesrText = '';




( function (ctx) { 

   
     ctx.setPosition  = function ( element ) {
        
        element.name == 'left' ? ( ctx.CANVAS_PAINTER.X = element.value ) : ( ctx.CANVAS_PAINTER.Y = element.value )
       
        if (window.CANVAS_PAINTER.text ) {
        
        textDraw ( ctx.CANVAS_PAINTER.X, ctx.CANVAS_PAINTER.Y, uesrText , ctx.CANVAS_PAINTER, CANVAS_STYLE );
        } else {
            drawShape(undefined,window.currentCanvas, ctx.CANVAS_PAINTER.X, ctx.CANVAS_PAINTER.Y , true)
          
        }
    }
    

    
  ctx.changeColor = function ( element )  {
    
        CANVAS_STYLE.COLOR = element.value;
    
        if( ctx.CANVAS_PAINTER.text ) {
    
        textDraw(ctx.CANVAS_PAINTER.X, ctx.CANVAS_PAINTER.Y ,uesrText , ctx.CANVAS_PAINTER, CANVAS_STYLE);
        
        } else {

            drawShape(undefined,window.currentCanvas, ctx.CANVAS_PAINTER.X, ctx.CANVAS_PAINTER.Y)
      
        }
    }

} (this) )





