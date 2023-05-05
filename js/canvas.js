"use strict";
/* This file will do canvas draw  */
( function ( ctx ) { 

  
 ctx.textDraw = (X, Y, text , val ,style) => {
    
    clearCanvas(val);
    ctx.CANVAS_PAINTER.ctx.fillStyle = style.COLOR;
    ctx.CANVAS_PAINTER.ctx.font = ` ${style.FONT} ${style.FONT_SIZE}px ${ctx.CANVAS_PAINTER.FONT_NAME}`;
    ctx.CANVAS_PAINTER.ctx.fillText(text, Number(X), Number(Y));
  
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

    if(temp) {   X++; Y++; }
      
    let circle_X = Number(X) + 45;
    let circle_Y = Number(Y) + 40;
    clearCanvas(val);
    ctx.CANVAS_PAINTER.ctx.beginPath();
    ctx.CANVAS_PAINTER.ctx.arc( circle_X, circle_Y, val.SHAPES.CIRCLE.radius, val.SHAPES.CIRCLE.startAngle, val.SHAPES.CIRCLE.endAngle, val.SHAPES.CIRCLE.direction);
    ctx.CANVAS_PAINTER.ctx.fillStyle = style.COLOR;
    ctx.CANVAS_PAINTER.ctx.fill();

}


// Draw a trianglr
 ctx.triangle = ( val, X, Y, style ) =>  {
  
    var x= val.SHAPES.TRIANGLE.X ;
    var y = val.SHAPES.TRIANGLE.Y;
    var angle =val.SHAPES.TRIANGLE.angle;
    clearCanvas(val);
    ctx.CANVAS_PAINTER.ctx.beginPath();
    ctx.CANVAS_PAINTER.ctx.moveTo( x, y);
    ctx.CANVAS_PAINTER.ctx.lineTo( x+angle*2, y );
    ctx.CANVAS_PAINTER.ctx.lineTo (x+angle, y-angle );
    ctx.CANVAS_PAINTER.ctx.fillStyle =style.COLOR;
    ctx.CANVAS_PAINTER.ctx.fill();
    ctx.CANVAS_PAINTER.ctx.beginPath();
}


// Draw a image
ctx.imageUpload = (val,img) =>  {
    ctx.CANVAS_PAINTER.text = 'img';
    clearCanvas(val);
    var image = img;
  
    
    image.onload = function () {
        let img_x = val.X -30;
        let img_y = val.Y -30;
        ctx.CANVAS_PAINTER.ctx.drawImage(image, img_x, img_y , val.IMAGE.width, val.IMAGE.height );
        val.CURRENT_IMG = image;
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