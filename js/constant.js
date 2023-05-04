
"use strict";

(function(ctx){
    
    const CANVAS_CONSTANTS = {
        WIDTH : 1000,
        HEIGHT:700,
       
    }

    const SHAPES = {
        TRIANGLE : {
            name :'triangle',
            X :25,
            Y :75,
            angle :50

        },
        CIRCLE : {
            name:'circle',
            X :60,
            Y :60,
            radius :50,
            startAngle : 25,
            endAngle :0,
            direction :2*Math.PI

        },
        SQUARE :{
             name:'square',
             width:100,
             height:100,
        },
        REACTANGLE : {
            name:'rectangle',
             width:100,
             height:50,
        },

    }
    
    const IMAGE = {
        width :300,
        height :200,
        X :20,
        Y :20
    }
    const SHAPE_CONSTANTS = {
        WIDTH:100,
        HEIGTH:50,
       
    }
   
    const CANVAS = document.querySelector('canvas');
    const INPUT_DIV = document.querySelector('#query');
    const TEXT_PLATE = document.querySelector('#text-panel')
   
    ctx.CANVAS_PAINTER = {
        CANVAS_CONSTANTS : CANVAS_CONSTANTS ,
        SHAPES :SHAPES,
        SHAPE_CONSTANTS : SHAPE_CONSTANTS ,
        IMAGE :IMAGE,
        CANVAS_ELEMENT :CANVAS,
        INPUT_DIV : INPUT_DIV,
        TEXT_PLATE : TEXT_PLATE,
        text : false
    }
 

})(this);


var CANVAS_STYLE = {
    COLOR :'#FF802C',
    FONT : 'NORMAL',
    FONT_SIZE : 20
}
window.CANVAS_STYLE;

var currentCanvas = "square"
window.currentShape;



