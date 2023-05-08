"use strict";
/* This is file have a common function*/

(function(ctx) {


    ctx.setPosition = function(element) {
        temp =false;


        element.name == 'left' ? (ctx.CANVAS_PAINTER.X = element.value) : (ctx.CANVAS_PAINTER.Y = element.value);

        if (ctx.CANVAS_PAINTER.text == 'text') {

            textDraw(ctx.CANVAS_PAINTER.X, ctx.CANVAS_PAINTER.Y, ctx.CANVAS_PAINTER.CURRENT_TEXT, ctx.CANVAS_PAINTER, CANVAS_STYLE);
        } else {
            if (ctx.CANVAS_PAINTER.text == 'shape') {

                drawShape(undefined, ctx.CANVAS_PAINTER.X, ctx.CANVAS_PAINTER.Y, true);

            } else {
                uploadImage();
            }
        }
    }



    ctx.changeColor = function(element) {

        temp =false;

        CANVAS_STYLE.COLOR = element.value;

        if (ctx.CANVAS_PAINTER.text == 'text') {

            textDraw(ctx.CANVAS_PAINTER.X, ctx.CANVAS_PAINTER.Y, ctx.CANVAS_PAINTER.CURRENT_TEXT, ctx.CANVAS_PAINTER, CANVAS_STYLE);

        } else if (ctx.CANVAS_PAINTER.text == 'shape') {

            drawShape(undefined,  ctx.CANVAS_PAINTER.X, ctx.CANVAS_PAINTER.Y);

        } else {
            return "";
        }
    }

} (this) )













