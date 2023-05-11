"use strict";
/* This code will do shape draw function */

(function(ctx) {


    //check if a current shape 
    ctx.drawShape = (element, l, t, temp) => {
        ctx.CANVAS_PAINTER.text = 'shape';
        var style = ctx.CANVAS_STYLE;
        var X = l ? l : ctx.CANVAS_PAINTER.X;
        var Y = t ? t : ctx.CANVAS_PAINTER.Y;
        var shapeName = element ? (element.getAttribute("data-shape")) : ctx.CANVAS_PAINTER.CURRENT_CANVAS;



        switch (shapeName) {
            case ctx.CANVAS_PAINTER.SHAPES.SQUARE.name:
                ctx.CANVAS_PAINTER.CURRENT_CANVAS = ctx.CANVAS_PAINTER.SHAPES.SQUARE.name;
                ctx.square(ctx.CANVAS_PAINTER, X, Y, style);
                break;

            case ctx.CANVAS_PAINTER.SHAPES.REACTANGLE.name:
                ctx.CANVAS_PAINTER.CURRENT_CANVAS = ctx.CANVAS_PAINTER.SHAPES.REACTANGLE.name;
                ctx.reactangle(ctx.CANVAS_PAINTER, X, Y, style);
                break;


            case ctx.CANVAS_PAINTER.SHAPES.CIRCLE.name:
                ctx.CANVAS_PAINTER.CURRENT_CANVAS = ctx.CANVAS_PAINTER.SHAPES.CIRCLE.name;
                ctx.circle(ctx.CANVAS_PAINTER, X, Y, style, temp);
                break;

            case ctx.CANVAS_PAINTER.SHAPES.TRIANGLE.name:
                ctx.CANVAS_PAINTER.CURRENT_CANVAS = ctx.CANVAS_PAINTER.SHAPES.TRIANGLE.name;
                ctx.triangle(ctx.CANVAS_PAINTER, Y, style);
                break;

            default:
                return '';
        }
    }



    // This code will be  convert select input file to img src
    ctx.uploadImage = (element) => {

        var src = element ? URL.createObjectURL(element.files[0]) : ctx.CANVAS_PAINTER.CURRENT_IMAGE;
        ctx.CANVAS_PAINTER.CURRENT_IMAGE = src;
        var img = new Image();
        img.src = ctx.CANVAS_PAINTER.CURRENT_IMAGE;
        imageUpload(ctx.CANVAS_PAINTER, img);
    }

}(this))