var temp_X = 10;
var temp_y = 15;



( function(ctx) {

 ctx.drawShape = (element, currentShape, l, t, temp) => {
    var style = window.CANVAS_STYLE;
    var X = l ? l : temp_X
    var Y = t ? t : temp_y

    var shapeName = element ? (element.getAttribute("data-shape")) : currentShape;

    window.CANVAS_PAINTER.text = false;
    switch (shapeName) {
        case window.CANVAS_PAINTER.SHAPES.SQUARE.name:
            window.currentCanvas = window.CANVAS_PAINTER.SHAPES.SQUARE.name
            ctx.square(window.CANVAS_PAINTER, X, Y, style);
            break;

        case window.CANVAS_PAINTER.SHAPES.REACTANGLE.name:
            window.currentCanvas = window.CANVAS_PAINTER.SHAPES.REACTANGLE.name
            ctx.reactangle(window.CANVAS_PAINTER, X, Y, style)
            break;


        case window.CANVAS_PAINTER.SHAPES.CIRCLE.name:
            window.currentCanvas = window.CANVAS_PAINTER.SHAPES.CIRCLE.name
            ctx.circle(window.CANVAS_PAINTER, X, Y, style, temp);
            break;

        case window.CANVAS_PAINTER.SHAPES.TRIANGLE.name:
            window.currentCanvas = window.CANVAS_PAINTER.SHAPES.TRIANGLE.name
           ctx.trinagle(window.CANVAS_PAINTER, X, Y, style)
            break;

        default:
            return ''
    }
}


ctx.uploadImage = (element) => {

    var src = URL.createObjectURL(element.files[0]);
    var img = new Image();
    img.src = src;
    imageUpload(window.CANVAS_PAINTER, img);
}

} (this) )