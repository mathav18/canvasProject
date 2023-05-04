var temp_X = 10;
var temp_y = 15;

function drawShape(element, currentShape, l, t ,temp) {
    let style = window.CANVAS_STYLE;
    let X = l ? l : temp_X
    let Y = t ? t : temp_y

    let shapeName = element ? (element.getAttribute("data-shape")) : currentShape;

    window.CANVAS_PAINTER.text = false;
    switch (shapeName) {
        case window.CANVAS_PAINTER.SHAPES.SQUARE.name:
            window.currentCanvas = window.CANVAS_PAINTER.SHAPES.SQUARE.name
            square(window.CANVAS_PAINTER, X, Y, style);
            break;

        case window.CANVAS_PAINTER.SHAPES.REACTANGLE.name:
            window.currentCanvas = window.CANVAS_PAINTER.SHAPES.REACTANGLE.name
            reactangle(window.CANVAS_PAINTER, X, Y, style)
            break;


        case window.CANVAS_PAINTER.SHAPES.CIRCLE.name:
            window.currentCanvas = window.CANVAS_PAINTER.SHAPES.CIRCLE.name
            circle(window.CANVAS_PAINTER, X, Y, style,temp);
            break;

        case window.CANVAS_PAINTER.SHAPES.TRIANGLE.name:
            window.currentCanvas = window.CANVAS_PAINTER.SHAPES.TRIANGLE.name
            trinagle(window.CANVAS_PAINTER, X, Y, style)
            break;

        default:
            return ''
    }
}


function uploadImage(element) {

    let src = URL.createObjectURL(element.files[0]);
    let img = new Image();
    img.src = src;
    imageUpload(window.CANVAS_PAINTER, img);
}