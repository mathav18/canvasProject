/* Writing a small text draw function*/
(function(ctx) {
    var styleELement;
    ctx.drawer = () => {

        ctx.CANVAS_PAINTER.text = 'text';
        ctx.CANVAS_PAINTER.CURRENT_CANVAS = '';

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

        if (element.innerText != '') {
            ctx.CANVAS_PAINTER.text = 'text';
            ctx.CANVAS_PAINTER.CURRENT_TEXT = element.innerText;
            ctx.CANVAS_PAINTER.left.value = ctx.CANVAS_PAINTER.X;
            ctx.CANVAS_PAINTER.top.value = ctx.CANVAS_PAINTER.Y;

            printer(ctx.CANVAS_PAINTER.CURRENT_TEXT)
            element.style.display = 'none';
        } else {
            element.style.display = 'none'
            console.log(true)
        }

    }


    ctx.Enter = (element) => {


        ctx.CANVAS_PAINTER.text = 'text';
        if (event.keyCode === 13) {
            if (element.innerText != '') {
                ctx.CANVAS_PAINTER.CURRENT_TEXT = element.innerText;
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
        ctx.CANVAS_PAINTER.FONT_NAME = element.innerText;
        ctx.CANVAS_PAINTER.FONT_FAMILY_LIST.style.display = "none"
        ctx.CANVAS_PAINTER.FONT_FAMILY.innerText = element.innerText;
        if (ctx.CANVAS_PAINTER.text == 'text') {
            printer(ctx.CANVAS_PAINTER.CURRENT_TEXT);
        }


    }

}(this))