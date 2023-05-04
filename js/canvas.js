var can = window.CANVAS_PAINTER.CANVAS_ELEMENT;

function textDraw(X, Y, text , val ,style) {
    clearCanvas(val)
    ctx.fillStyle = style.COLOR;
    ctx.font = ` ${style.FONT} ${style.FONT_SIZE}px Arial`
    ctx.fillText(text, X, Y)
  
}


function square ( val, X, Y, style ) {
    console.log(X,Y)
    clearCanvas(val)
    ctx.fillStyle = style.COLOR;
    ctx.fillRect (X, Y, val.SHAPES.SQUARE.width, val.SHAPES.SQUARE.height);

}


function reactangle (  val, X, Y, style ) {
    clearCanvas(val)
    ctx.fillStyle = style.COLOR;
    ctx.fillRect (X, Y, val.SHAPES.REACTANGLE.width, val.SHAPES.REACTANGLE.height);

}


function circle (  val, X, Y, style ) {

   
    clearCanvas(val);
    ctx.arc( val.SHAPES.CIRCLE.X, val.SHAPES.CIRCLE.Y, val.SHAPES.CIRCLE.radius, val.SHAPES.CIRCLE.startAngle, val.SHAPES.CIRCLE.endAngle, val.SHAPES.CIRCLE.direction);
    ctx.fillStyle = style.COLOR;
    ctx.fill();

}

function trinagle ( val, X, Y, style ) {
    let x= val.SHAPES.TRIANGLE.X
    let y = val.SHAPES.TRIANGLE.Y
    let angle =val.SHAPES.TRIANGLE.angle;
    clearCanvas(val);
    ctx.beginPath();
    ctx.moveTo( x, y)
    ctx.lineTo( x+angle*2, y )
    ctx.lineTo (x+angle, y-angle );
    ctx.fillStyle =style.COLOR;
    ctx.fill();
    ctx.beginPath();
}



function imageUpload (val,img) {
    clearCanvas(val);
    img.onload = function () {
        ctx.drawImage(img, val.IMAGE.X,val.IMAGE.X , val.IMAGE.width, val.IMAGE.height );
    };
}



function clearCanvas (val) {

    ctx.clearRect(0,0,val.CANVAS_CONSTANTS.WIDTH,val.CANVAS_CONSTANTS.HEIGHT);
}