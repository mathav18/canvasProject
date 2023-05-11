/* Writing a small text draw function*/

var UNDO_REDO_ACTION = true;
var currentBtn = 0;
var temp = true;
(function (ctx) {

    var styleELement;
    ctx.drawer = () => {
        UNDO_REDO_ACTION = true;
        temp = true;

        ctx.CANVAS_PAINTER.text = 'text';
        var temp = ctx.CANVAS_PAINTER.INPUT_DIV.innerText;
        if (temp == '') {
            return ''

        } else {
            ctx.CANVAS_PAINTER.CURRENT_TEXT = ctx.CANVAS_PAINTER.INPUT_DIV.innerText;
            printer(ctx.CANVAS_PAINTER.CURRENT_TEXT)
            ctx.CANVAS_PAINTER.INPUT_DIV.innerText = '';
        }
    }



    ctx.printer = (text) => {
       
        ctx.textDraw(ctx.CANVAS_PAINTER.X, ctx.CANVAS_PAINTER.Y, text, ctx.CANVAS_PAINTER, CANVAS_STYLE);
    }



    ctx.textStyleChanger = (element) => {
        temp = false;

        if (ctx.CANVAS_PAINTER.text == 'text') {

            if (element == styleELement) {
                element.classList.remove('selected')
                CANVAS_STYLE.FONT = 'normal'

            } else if (styleELement) {
                styleELement.classList.remove('selected')
            }

            styleELement = element;
            styleELement.classList.add('selected');
            CANVAS_STYLE.FONT = element.getAttribute("data-name");

            printer(ctx.CANVAS_PAINTER.CURRENT_TEXT);
        }

    }




    ctx.fontSizeChanger = (element) => {
        temp = false;
        CANVAS_STYLE.FONT_SIZE = element.value;
        ctx.CANVAS_PAINTER.top.value = ctx.CANVAS_PAINTER.Y;
        if (ctx.CANVAS_PAINTER.text == 'text') {
            printer(ctx.CANVAS_PAINTER.CURRENT_TEXT);
        }
    }



    ctx.textEnter = (element, event) => {

        var x = event.clientX;
        var y = event.clientY;
        var plate = ctx.CANVAS_PAINTER.TEXT_PLATE;
        plate.style.display = 'block';
        plate.style.top = y + 'px';
        plate.style.left = x + 'px';
        plate.innerText = "";
        plate.setAttribute('contenteditable', 'true')
        plate.focus();
        ctx.CANVAS_PAINTER.X = x - 180;
        ctx.CANVAS_PAINTER.Y = y - 120;
    }



    ctx.textEnterd = (element) => {

        if (currentBtn == 13) {
            return false;
        }
        if (element.innerText != '') {
            UNDO_REDO_ACTION = true;
            ctx.CANVAS_PAINTER.text = 'text';
            ctx.CANVAS_PAINTER.CURRENT_TEXT = element.innerText;
            ctx.CANVAS_PAINTER.left.value = ctx.CANVAS_PAINTER.X;
            ctx.CANVAS_PAINTER.top.value = ctx.CANVAS_PAINTER.Y;
            temp = true;
            printer(ctx.CANVAS_PAINTER.CURRENT_TEXT)
            element.style.display = 'none';
        } else {
            element.style.display = 'none'
        }
    }


    ctx.Enter = (element) => {
        currentBtn = event.keyCode
        if (event.keyCode === 13) {
            temp = true;
            b = true;
            ctx.CANVAS_PAINTER.text = 'text';

            if (element.innerText != '') {
                ctx.CANVAS_PAINTER.CURRENT_TEXT = element.innerText;
                ctx.CANVAS_PAINTER.left.value = ctx.CANVAS_PAINTER.X;
                ctx.CANVAS_PAINTER.top.value = ctx.CANVAS_PAINTER.Y;
                printer(ctx.CANVAS_PAINTER.CURRENT_TEXT)
                element.style.display = 'none'
            } else {
                element.style.display = 'none'
            }
        }
    }


    ctx.fontSelector = (element) => {
        ctx.CANVAS_PAINTER.FONT_FAMILY_LIST.style.display = "block"
    }


    ctx.chooseFont = (element) => {
        temp = false;
        ctx.CANVAS_PAINTER.FONT_NAME = element.innerText;
        ctx.CANVAS_PAINTER.FONT_FAMILY_LIST.style.display = "none"
        ctx.CANVAS_PAINTER.FONT_FAMILY.innerText = element.innerText;
        if (ctx.CANVAS_PAINTER.text == 'text') {
            printer(ctx.CANVAS_PAINTER.CURRENT_TEXT);
        }
    }


    //this will be code UNDO action
    ctx.undoAction = (element) => {

        if (ctx.UNDO_ARRAY.length >= 1) {

            ctx.REDO_ARRAY.push(ctx.UNDO_ARRAY[ctx.UNDO_ARRAY.length - 1])
            ctx.UNDO_ARRAY.pop();
            var current = ctx.UNDO_ARRAY[ctx.UNDO_ARRAY.length - 1]

            if (current != undefined) {

                UNDO_REDO_ACTION = false;
                ctx.CANVAS_PAINTER.X = current.X
                ctx.CANVAS_PAINTER.Y = current.Y;
               console.log( ctx.CANVAS_PAINTER.FONT_INPUT_BOX)
                ctx.CANVAS_PAINTER.FONT_INPUT_BOX.value = current.FONT_SIZE
                ctx.CANVAS_PAINTER.left.value = current.X;
                ctx.CANVAS_PAINTER.top.value = current.Y
                ctx.CANVAS_PAINTER.CURRENT_TEXT = current.TEXT;
                ctx.CANVAS_PAINTER.FONT_NAME = current.FONT_NAME;
                CANVAS_STYLE.FONT = current.FONT;
                CANVAS_STYLE.FONT_SIZE = current.FONT_SIZE;
                CANVAS_STYLE.COLOR = current.COLOR;
                printer(ctx.CANVAS_PAINTER.CURRENT_TEXT);

            }

        } else {
            ctx.clearCanvas(false)
        }
    }



//this will be code REDO action
    ctx.redoAction = () => {

        var current = ctx.REDO_ARRAY[ctx.REDO_ARRAY.length - 1]
        ctx.REDO_ARRAY.pop();
        if (current != undefined) {
            UNDO_REDO_ACTION = true;
            ctx.CANVAS_PAINTER.X = current.X
            ctx.CANVAS_PAINTER.Y = current.Y;
            ctx.CANVAS_PAINTER.CURRENT_TEXT = current.TEXT;
            ctx.CANVAS_PAINTER.FONT_NAME = current.FONT_NAME;

            ctx.CANVAS_PAINTER.left.value = current.X;
            ctx.CANVAS_PAINTER.top.value = current.Y;
            ctx.CANVAS_PAINTER.FONT_INPUT_BOX.value = current.FONT_SIZE;
            CANVAS_STYLE.FONT = current.FONT;
            CANVAS_STYLE.FONT_SIZE = current.FONT_SIZE;
            CANVAS_STYLE.COLOR = current.COLOR;
            printer(ctx.CANVAS_PAINTER.CURRENT_TEXT);
        }

    }

    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 'z') {
            ctx.undoAction();
        }
    });




    document.addEventListener('keydown', function (event) {

        if (event.ctrlKey && event.key === 'y') {

            ctx.redoAction();

        }
    });


}(this))