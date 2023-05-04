



( function(ctx) { 

var X = 10;
var Y = 15;
var uesrText = '';



function setPosition  ( element ) {

    element.name == 'left' ? ( X = element.value ) : ( Y = element.value )
    var text = MY_OBJ.INPUT_DIV.innerText;

    if (window.CANVAS_PAINTER.text ) {
    
    textDraw ( X, Y, uesrText , MY_OBJ, CANVAS_STYLE );
    } else {
        drawShape(undefined,window.currentCanvas, X, Y , true)
    }
}



function changeColor ( element ) {

    var text = MY_OBJ.INPUT_DIV.innerText;
    CANVAS_STYLE.COLOR = element.value;

    if( window.CANVAS_PAINTER.text ) {

    textDraw(X, Y ,uesrText , MY_OBJ, CANVAS_STYLE);
    
    } else {
        drawShape(undefined,window.currentCanvas, X, Y)
    }

}

})



