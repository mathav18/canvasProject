/* This code will do shape draw function*/
"use strict"
(function (ctx) {


    //check if a current shape 
    ctx.drawShape = (element, currentShape, l, t, temp) => {
        var style = ctx.CANVAS_STYLE;
        var X = l ? l : ctx.CANVAS_PAINTER.X;
        var Y = t ? t : ctx.CANVAS_PAINTER.Y;
        var shapeName = element ? (element.getAttribute("data-shape")) : ctx.CANVAS_PAINTER.CURRENT_CANVAS;
        ctx.CANVAS_PAINTER.text = false;

        
        switch (shapeName) {
            case ctx.CANVAS_PAINTER.SHAPES.SQUARE.name:
                ctx.CANVAS_PAINTER.CURRENT_CANVAS = ctx.CANVAS_PAINTER.SHAPES.SQUARE.name
                ctx.square(ctx.CANVAS_PAINTER, X, Y, style);
                break;

            case ctx.CANVAS_PAINTER.SHAPES.REACTANGLE.name:
                ctx.CANVAS_PAINTER.CURRENT_CANVAS = ctx.CANVAS_PAINTER.SHAPES.REACTANGLE.name
                ctx.reactangle(ctx.CANVAS_PAINTER, X, Y, style)
                break;


            case ctx.CANVAS_PAINTER.SHAPES.CIRCLE.name:
                ctx.CANVAS_PAINTER.CURRENT_CANVAS = ctx.CANVAS_PAINTER.SHAPES.CIRCLE.name
                ctx.circle(ctx.CANVAS_PAINTER, X, Y, style, temp);
                break;

            case ctx.CANVAS_PAINTER.SHAPES.TRIANGLE.name:
                ctx.CANVAS_PAINTER.CURRENT_CANVAS = ctx.CANVAS_PAINTER.SHAPES.TRIANGLE.name
                ctx.triangle(ctx.CANVAS_PAINTER, X, Y, style)
                break;

            default:

                return ''
        }
    }



    // This code will be  convert select input file to img src
    ctx.uploadImage = (element) => {

        var src = URL.createObjectURL(element.files[0]);
        var img = new Image();
        img.src = src;
        imageUpload(ctx.CANVAS_PAINTER, img);
    }

}(this))