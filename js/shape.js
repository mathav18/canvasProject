
var temp_X =10;
var temp_Y =15;


( function(ctx) {

 ctx.drawShape = (element, currentShape, x, y, temp) => {
    var style = window.CANVAS_STYLE;
    var X = x ? x :temp_X;
    var Y = y ? y :temp_Y;
   
    var shapeName = element ? (element.getAttribute("data-shape")) : ctx.currentCanvas;
    console.log(shapeName)  
    window.CANVAS_PAINTER.text = false;
    switch (shapeName) {
        case window.CANVAS_PAINTER.SHAPES.SQUARE.name:
            ctx.currentCanvas = ctx.CANVAS_PAINTER.SHAPES.SQUARE.name
            ctx.square(ctx.CANVAS_PAINTER, X, Y, style);
            break;

        case ctx.CANVAS_PAINTER.SHAPES.REACTANGLE.name:
            ctx.currentCanvas = ctx.CANVAS_PAINTER.SHAPES.REACTANGLE.name
            ctx.reactangle(ctx.CANVAS_PAINTER, X, Y, style)
            break;


        case ctx.CANVAS_PAINTER.SHAPES.CIRCLE.name:
            ctx.currentCanvas = ctx.CANVAS_PAINTER.SHAPES.CIRCLE.name
            ctx.circle(ctx.CANVAS_PAINTER, X, Y, style, temp);
            break;

        case ctx.CANVAS_PAINTER.SHAPES.TRIANGLE.name:
            ctx.currentCanvas = ctx.CANVAS_PAINTER.SHAPES.TRIANGLE.name
           ctx.trinagle(ctx.CANVAS_PAINTER, X, Y, style)
            break;

        default:
           
            return ''
    }
}


ctx.uploadImage = (element) => {

    var src = URL.createObjectURL(element.files[0]);
    var img = new Image();
    img.src = src;
    imageUpload(ctx.CANVAS_PAINTER, img);
}

} (this) )