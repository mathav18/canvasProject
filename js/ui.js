 "use strict";

const INPUTELEMENTS=document.querySelectorAll('.divEle')
const FONT_SIZE = INPUTELEMENTS[1];
const POSITION_LEFT = INPUTELEMENTS[2];
const POSITION_TOP =  INPUTELEMENTS[3];
const CHANGE_COLOR_INPUT = INPUTELEMENTS[4];
window.POSITION_TOP;


FONT_SIZE.addEventListener('input', function () { fontSizeChanger(this) });

POSITION_LEFT.addEventListener('input', function () { setPosition(this) });

POSITION_TOP.addEventListener('input', function () { setPosition(this) });

CHANGE_COLOR_INPUT.addEventListener('input', function () { changeColor(this) })



const BUTTON_ELEMENTS = document.querySelectorAll('button');
const DRAW_BUTTON = BUTTON_ELEMENTS[0];
const CLEAR_BUTTON = BUTTON_ELEMENTS[1];

DRAW_BUTTON.addEventListener('click', function () { drawer() });
CLEAR_BUTTON.addEventListener('click', function () { clearCanvas() });



const DIV_ELEMENTS = document.querySelectorAll('.textStyle');

DIV_ELEMENTS.forEach((element) => { element.addEventListener('click' ,function () { textStyleChanger(this) })})



const SHAPE__DIV__ELEMENT = document.querySelectorAll('.shape');

SHAPE__DIV__ELEMENT.forEach((element) => { element.addEventListener('click', function () { drawShape(this) })});

const TRIANGLE__DIV = document.querySelector('#triangle');
TRIANGLE__DIV.addEventListener('click' , function () { drawShape ( this )} )


const IMAGE_UPLOAD_INPUT = document.querySelector('#chooseImg');

IMAGE_UPLOAD_INPUT.addEventListener('change', function () { uploadImage(this) } )

window.CANVAS_PAINTER.CANVAS_ELEMENT.addEventListener('dblclick', function () { textEnter(this,event) } )

window.CANVAS_PAINTER.TEXT_PLATE.addEventListener('blur', function(){ textEnterd(this) })
window.CANVAS_PAINTER.TEXT_PLATE.addEventListener('keydown', function(){ Enter(this) })
