
( function ( ctx ) { 
 ctx.textDraw = (X, Y, text , val ,style) => {
 
    clearCanvas(val)
    ctx.CANVAS_PAINTER.ctx.fillStyle = style.COLOR;
    ctx.CANVAS_PAINTER.ctx.font = ` ${style.FONT} ${style.FONT_SIZE}px Arial`
    ctx.CANVAS_PAINTER.ctx.fillText(text, X, Y)
  
}


 ctx.square = ( val, X, Y, style ) => {

    clearCanvas(val)
    ctx.CANVAS_PAINTER.ctx.fillStyle = style.COLOR;
    ctx.CANVAS_PAINTER.ctx.fillRect (X, Y, val.SHAPES.SQUARE.width, val.SHAPES.SQUARE.height);

}


 ctx.reactangle = (  val, X, Y, style ) => {

    clearCanvas(val)
    ctx.CANVAS_PAINTER.ctx.fillStyle = style.COLOR;
    ctx.CANVAS_PAINTER.ctx.fillRect (X, Y, val.SHAPES.REACTANGLE.width, val.SHAPES.REACTANGLE.height);

}


ctx.circle = (  val, X, Y, style ,temp) => {

    if(temp) {   X++; Y++; }
      
    let circle_X = Number(X) + 45;
    let circle_Y = Number(Y) + 40;
    clearCanvas(val);
    ctx.CANVAS_PAINTER.ctx.beginPath()
    ctx.CANVAS_PAINTER.ctx.arc( circle_X, circle_Y, val.SHAPES.CIRCLE.radius, val.SHAPES.CIRCLE.startAngle, val.SHAPES.CIRCLE.endAngle, val.SHAPES.CIRCLE.direction);
    ctx.CANVAS_PAINTER.ctx.fillStyle = style.COLOR;
    ctx.CANVAS_PAINTER.ctx.fill();

}



 ctx.trinagle = ( val, X, Y, style ) =>  {
  
    let x= val.SHAPES.TRIANGLE.X
    let y = val.SHAPES.TRIANGLE.Y
    let angle =val.SHAPES.TRIANGLE.angle;
    clearCanvas(val);
    ctx.CANVAS_PAINTER.ctx.beginPath();
    ctx.CANVAS_PAINTER.ctx.moveTo( x, y)
    ctx.CANVAS_PAINTER.ctx.lineTo( x+angle*2, y )
    ctx.CANVAS_PAINTER.ctx.lineTo (x+angle, y-angle );
    ctx.CANVAS_PAINTER.ctx.fillStyle =style.COLOR;
    ctx.CANVAS_PAINTER.ctx.fill();
    ctx.CANVAS_PAINTER.ctx.beginPath();
}



ctx.imageUpload = (val,img) =>  {
    clearCanvas(val);
    img.onload = function () {
        ctx.CANVAS_PAINTER.ctx.drawImage(img, val.IMAGE.X,val.IMAGE.X , val.IMAGE.width, val.IMAGE.height );
    };
}



 ctx.clearCanvas = (val) => {

    if(!val) {
        Y = 10;
        X = 15;
        ctx.currentCanvas = '';
        ctx.CANVAS_PAINTER.left.value = 10;
        ctx.CANVAS_PAINTER.top.value = 15;
    }
    
    let c = val ? val : window.CANVAS_PAINTER;
    ctx.CANVAS_PAINTER.ctx.clearRect(0,0,c.CANVAS_CONSTANTS.WIDTH,c.CANVAS_CONSTANTS.HEIGHT);
    

}

} (this) )