
"use strict";

(function(ctx){
    
    const CANVAS_CONSTANTS = {
        WIDTH : 1000,
        HEIGHT:700
    }

    const SHAPES = {
        TRIANGLE : "triangle",
        CIRCLE : "cricle",
        SQUARE :'square',
        REACTANGLE : 'reactangle'
    }
    
    const SHAPE_CONSTANTS = {
        WIDTH:100,
        HEIGTH:50,
    }
   

    ctx.CANVAS_PAINTER = {}
    ctx.CANVAS_PAINTER.CANVAS_CONSTANTS = CANVAS_CONSTANTS;
    ctx.CANVAS_PAINTER.SHAPES = SHAPES;
    ctx.CANVAS_PAINTER.SHAPE_CONSTANTS=SHAPE_CONSTANTS;

})(this);