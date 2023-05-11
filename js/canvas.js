"use strict";
/* This file will do canvas draw  */
( function ( ctx ) { 

  
 ctx.textDraw = (X, Y, text , val ,style) => {
   
    clearCanvas(val);
    ctx.CANVAS_PAINTER.ctx.fillStyle = style.COLOR;
    ctx.CANVAS_PAINTER.ctx.font = ` ${style.FONT} ${style.FONT_SIZE}px ${ctx.CANVAS_PAINTER.FONT_NAME}`;
    ctx.CANVAS_PAINTER.ctx.fillText(text, Number(X), Number(Y));
   

    if( UNDO_REDO_ACTION ) {
    var obj = {
          NAME :'text',
          TEXT:text,
          X :Number(X),
          Y: Number(Y),
          COLOR : style.COLOR,
          FONT : style.FONT,
          FONT_SIZE : style.FONT_SIZE,
          FONT_NAME : ctx.CANVAS_PAINTER.FONT_NAME
    }

   temp ? ( ctx.UNDO_ARRAY.push(obj) ) : ( ctx.UNDO_ARRAY[ctx.UNDO_ARRAY.length -1] = obj)
   
}


  
}

//Draw a square
 ctx.square = ( val, X, Y, style ) => {

    clearCanvas(val);
    ctx.CANVAS_PAINTER.ctx.fillStyle = style.COLOR;
    ctx.CANVAS_PAINTER.ctx.fillRect (X, Y, val.SHAPES.SQUARE.width, val.SHAPES.SQUARE.height);

}


// Draw a reactangle
 ctx.reactangle = (  val, X, Y, style ) => {

    clearCanvas(val);
    ctx.CANVAS_PAINTER.ctx.fillStyle = style.COLOR;
    ctx.CANVAS_PAINTER.ctx.fillRect (X, Y, val.SHAPES.REACTANGLE.width, val.SHAPES.REACTANGLE.height);

}


//Draw a circle
ctx.circle = (  val, X, Y, style ,temp) => {

    if(temp) {   X++;  Y++; }
      
    let circle_X = Number(X) + 45;
    let circle_Y = Number(Y) + 40;
    clearCanvas(val);
    ctx.CANVAS_PAINTER.ctx.beginPath();
    ctx.CANVAS_PAINTER.ctx.arc( circle_X, circle_Y, val.SHAPES.CIRCLE.radius, val.SHAPES.CIRCLE.startAngle, val.SHAPES.CIRCLE.endAngle, val.SHAPES.CIRCLE.direction);
    ctx.CANVAS_PAINTER.ctx.fillStyle = style.COLOR;
    ctx.CANVAS_PAINTER.ctx.fill();

}


// Draw a triangle
 ctx.triangle = ( val,y, style ) =>  {
  
    var triangleX= val.SHAPES.TRIANGLE.X ;
    var triangleY = typeof y == 'number' ? y + 40 : Number(y) + 40;
    var angle =val.SHAPES.TRIANGLE.angle;
    clearCanvas(val);
    ctx.CANVAS_PAINTER.ctx.beginPath();
    ctx.CANVAS_PAINTER.ctx.moveTo( triangleX, triangleY);
    ctx.CANVAS_PAINTER.ctx.lineTo( triangleX+angle*2, triangleY );
    ctx.CANVAS_PAINTER.ctx.lineTo (triangleX+angle, triangleY-angle );
    ctx.CANVAS_PAINTER.ctx.fillStyle =style.COLOR;
    ctx.CANVAS_PAINTER.ctx.fill();
    ctx.CANVAS_PAINTER.ctx.beginPath();
}


// Draw a image
ctx.imageUpload = (val,img) =>  {
    ctx.CANVAS_PAINTER.text = 'img';
    clearCanvas(val);
   
  
    
    img.onload = function () {
        let img_x = val.X - 30;
        let img_y = val.Y - 30;
        ctx.CANVAS_PAINTER.ctx.drawImage(img, img_x, img_y , val.IMAGE.width, val.IMAGE.height );
        val.CURRENT_IMG = img;
    };
}



// This code will be clear all canvas
 ctx.clearCanvas = (val) => {

    if(!val) {
        ctx.currentCanvas = '';
        ctx.CANVAS_PAINTER.left.value = 10;
        ctx.CANVAS_PAINTER.top.value = 15;
        ctx.CANVAS_PAINTER.X =10;
        ctx.CANVAS_PAINTER.Y =15;
    }
    
    var c = val ? val : ctx.CANVAS_PAINTER;
    ctx.CANVAS_PAINTER.ctx.clearRect(0,0,c.CANVAS_CONSTANTS.WIDTH,c.CANVAS_CONSTANTS.HEIGHT);
    

}

} (this) );