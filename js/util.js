/* This is file have a common function*/
"use strict";
(function (ctx) {
   
    
    ctx.setPosition = function (element) {

        element.name == 'left' ? (ctx.CANVAS_PAINTER.X = element.value) : (ctx.CANVAS_PAINTER.Y = element.value)

        if (ctx.CANVAS_PAINTER.text) {
            
            textDraw(ctx.CANVAS_PAINTER.X, ctx.CANVAS_PAINTER.Y, ctx.CANVAS_PAINTER.CURRENT_TEXT, ctx.CANVAS_PAINTER, CANVAS_STYLE);
        } else {
            drawShape(undefined, ctx.CANVAS_PAINTER.CURRENT_CANVAS, ctx.CANVAS_PAINTER.X, ctx.CANVAS_PAINTER.Y, true)

        }
    }



    ctx.changeColor = function (element) {

        CANVAS_STYLE.COLOR = element.value;

        if (ctx.CANVAS_PAINTER.text) {

            textDraw(ctx.CANVAS_PAINTER.X, ctx.CANVAS_PAINTER.Y, ctx.CANVAS_PAINTER.CURRENT_TEXT, ctx.CANVAS_PAINTER, CANVAS_STYLE);

        } else {

            drawShape(undefined, ctx.CANVAS_PAINTER.CURRENT_CANVAS, ctx.CANVAS_PAINTER.X, ctx.CANVAS_PAINTER.Y);

        }
    }

}(this))