"use strict";
/* This file have constants  value*/

(function (ctx) {

    var CANVAS_CONSTANTS = {
        WIDTH: 1000,
        HEIGHT: 700,
    }

    var SHAPES = {
        TRIANGLE: {
            name: 'triangle',
            X: 25,
            Y: 75,
            angle: 50
        },
        CIRCLE: {
            name: 'circle',
            X: 60,
            Y: 60,
            radius: 50,
            startAngle: 25,
            endAngle: 0,
            direction: 2 * Math.PI

        },
        SQUARE: {
            name: 'square',
            width: 100,
            height: 100,
        },
        REACTANGLE: {
            name: 'rectangle',
            width: 100,
            height: 50
        },

    }

    var IMAGE = {
        width: 300,
        height: 200,
        X: 20,
        Y: 20
    }

    var CANVAS = document.querySelector('canvas');
    var context = CANVAS.getContext('2d')
    var INPUT_DIV = document.querySelector('#query');
    var TEXT_PLATE = document.querySelector('#text-panel')
    var POSITION = document.querySelectorAll('.position');
    var TOP_POSITION = POSITION[0];
    var LEFT_POSITION = POSITION[1];
    var FONT_FAMILY_LIST = document.querySelector('.font_family_list');
    var FONT_FAMILY = document.querySelector('#font_display')


    ctx.CANVAS_PAINTER = {
        CANVAS_CONSTANTS: CANVAS_CONSTANTS,
        SHAPES: SHAPES,
        IMAGE: IMAGE,
        CANVAS_ELEMENT: CANVAS,
        INPUT_DIV: INPUT_DIV,
        TEXT_PLATE: TEXT_PLATE,
        text: 'text',
        ctx: context,
        top: TOP_POSITION,
        left: LEFT_POSITION,
        FONT_FAMILY_LIST: FONT_FAMILY_LIST,
        FONT_FAMILY: FONT_FAMILY,
        FONT_NAME: 'Arial',
        CURRENT_CANVAS : '',
        CURRENT_TEXT : '',
        CURRENT_IMG :'',
        X: 10,
        Y: 15
    }
    var CANVAS_STYLE = {
        COLOR: '#FF802C',
        FONT: 'NORMAL',
        FONT_SIZE: 20
    }
    ctx.CANVAS_STYLE = CANVAS_STYLE
   

})(this);