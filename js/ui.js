 /*This file have take Element  and add function */

 "use strict";
(function (ctx) {

var INPUTELEMENTS=document.querySelectorAll('.divEle')
var FONT_SIZE = INPUTELEMENTS[1];
var POSITION_LEFT = INPUTELEMENTS[2];
var POSITION_TOP =  INPUTELEMENTS[3];
var CHANGE_COLOR_INPUT = INPUTELEMENTS[4];
ctx.POSITION_TOP;

FONT_SIZE.addEventListener('input', function () { ctx.fontSizeChanger(this) });

POSITION_LEFT.addEventListener('input', function () { ctx.setPosition(this) });

POSITION_TOP.addEventListener('input', function () { ctx.setPosition(this) });

CHANGE_COLOR_INPUT.addEventListener('input', function () { ctx.changeColor(this) })



var BUTTON_ELEMENTS = document.querySelectorAll('button');
var DRAW_BUTTON = BUTTON_ELEMENTS[0];
var CLEAR_BUTTON = BUTTON_ELEMENTS[1];

DRAW_BUTTON.addEventListener('click', function () { ctx.drawer() });
CLEAR_BUTTON.addEventListener('click', function () { ctx.clearCanvas() });



var DIV_ELEMENTS = document.querySelectorAll('.textStyle');

DIV_ELEMENTS.forEach((element) => { element.addEventListener('click' ,function () { ctx.textStyleChanger(this) })})


var SHAPE__DIV__ELEMENT = document.querySelectorAll('.shape');

SHAPE__DIV__ELEMENT.forEach((element) => { element.addEventListener('click', function () { ctx.drawShape(this) })});

var TRIANGLE__DIV = document.querySelector('#triangle');
TRIANGLE__DIV.addEventListener('click' , function () { ctx.drawShape ( this )} )


var IMAGE_UPLOAD_INPUT = document.querySelector('#chooseImg');

IMAGE_UPLOAD_INPUT.addEventListener('change', function () { ctx.uploadImage(this) } )

ctx.CANVAS_PAINTER.CANVAS_ELEMENT.addEventListener('dblclick', function () { ctx.textEnter(this,event) } )

ctx.CANVAS_PAINTER.TEXT_PLATE.addEventListener('blur', function(){ ctx.textEnterd(this) })
ctx.CANVAS_PAINTER.TEXT_PLATE.addEventListener('keydown', function(){ ctx.Enter(this) })


var FONT_FAMILY_SELECTOR = document.querySelector('.fonts');
FONT_FAMILY_SELECTOR.addEventListener('click',function () { ctx.fontSelector( this ) })

var FONT_LIST = document.querySelectorAll('.font');

FONT_LIST.forEach((element) => element.addEventListener('click' ,function () { ctx.chooseFont(this) }) )
}(this));

