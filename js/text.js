"use strict"
var styleELement;

( function(ctx) { 

function drawer() {
    window.CANVAS_PAINTER.text = true;
    window.currentCanvas = '';

    var temp = ctx.CANVAS_PAINTER.INPUT_DIV.innerText;

    if (temp == '') {
        return ''

    } else {
        uesrText = ctx.CANVAS_PAINTER.INPUT_DIV.innerText;
        printer(uesrText)
        ctx.CANVAS_PAINTER.INPUT_DIV.innerText = '';
    }
}



function printer(uesrText) {
    textDraw(X, Y, uesrText, ctx.CANVAS_PAINTER, CANVAS_STYLE);
}



function textStyleChanger(element) {


    if (window.CANVAS_PAINTER.text) {
       
        if (element == styleELement) {
            element.classList.remove('selected')
            CANVAS_STYLE.FONT = 'normal'

        } else if (styleELement) {
            styleELement.classList.remove('selected')
        }

        styleELement = element;
        styleELement.classList.add('selected');
        CANVAS_STYLE.FONT = element.getAttribute("data-name");
        printer(uesrText);
    }

}




function fontSizeChanger(element) {

    CANVAS_STYLE.FONT_SIZE = element ? (element.value) : (CANVAS_STYLE.FONT_SIZE += 1);
    y_positon = element ? (element.value) : (CANVAS_STYLE.FONT_SIZE += 1)
    printer(uesrText);

}



function textEnter(element, event) {

    var x = event.clientX;
    var y = event.clientY;
    var plate = window.CANVAS_PAINTER.TEXT_PLATE;
    plate.style.display = 'block';
    plate.style.top = y + 'px';
    plate.style.left = x + 'px';
    plate.innerText = "";
    plate.setAttribute('contenteditable', 'true')
    plate.focus();
    X = x - 180;
    Y = y - 120;

}



function textEnterd(element) {
    window.CANVAS_PAINTER.text = true;
    uesrText = element.innerText;

    printer(uesrText)
    element.style.display = 'none';

}


function Enter(element) {
    window.CANVAS_PAINTER.text = true;
    if (event.keyCode === 13) {
        uesrText = element.innerText;
        printer(uesrText)
        element.style.display = 'none'
    }
}

}(this))