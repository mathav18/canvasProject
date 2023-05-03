const divELement = document.querySelector('#query');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
let topInp = document.querySelector('#top');
const template = document.querySelector('.template2')
const textPanel = document.querySelector('#text-panel');
// textPanel.style.display='none'


let ele;
let currentText = "";
let text;
let query = '';
let check = false;
let triangle = false;
let arr = [];
var x = [];
var y = [];
let currentImage ={};
let currentShape;
let textWidth=0;
let textHeight=0;
let currentTextLeft=0;
let currentTextTop=0;





const obj = { //this obj has position, background and font style
    width: 800,
    height: 400,
    color: '#FB8332',
    left: 5,
    top: 10,
    fontSize: 15,
    textStyle: 'normal'

}


const shapeValue = { //this obj has shape prorerties
    x: 5,
    y: 10,
    width: 300,
    height: 300
}


//this  function is get text value and call the text Draw function 

function drawer() {
    check = false
    query = divELement.innerText;
    draw(query);
}


//this function is set text fontSize
function setFontSize(e) {

    let temp = obj.fontSize;
    obj.fontSize = e.value;
    temp > e.value ? obj.top += e.value - temp : obj.top -= temp - e.value;
    check ? null : topInp.value = obj.top;
    check ? null : draw(query);

}



//this function is set x and y position 
function setPosition(e) {

    e.name == 'left' ? (obj.left = e.value) : (obj.top = e.value);

    if (check) {
      
        triangle ? circleDraw() : shapeDrawer(shapeValue);
    } else {
       
        draw(query);
    }
}


//this function is text and shape color change
function changeColor(e) {

    obj.color = e.value;
    ctx.fillStyle = obj.color;


    switch(currentShape) {
        case 'text':
            draw(query , 'color');
            break;
        case 'square':
            ctx.fillRect(currentImage.left, currentImage.top, currentImage.width, currentImage.height);
            break;
        default:
            console.log('triangel or circle')
    }
}




//this function is change text style ( bold or italic )
function textStyleChanger(e) {

    if (e == ele) {
        e.classList.remove('selected')
        obj.textStyle = 'normal';
        check ? null : draw(query);
        return ''
    }

    if (ele) {
        ele.classList.remove('selected')
    }

    ele = e;
    ele.classList.add('selected')
    obj.textStyle = e.getAttribute("data-name");
    check ? null : draw(query);
}




//this function is  insert text 
function draw(text , color) {
      currentShape ='text'
    if (obj.left > 900) {
        obj.left = 10;
        obj.top = obj.top + 30;

    }

    if (color) {
        console.log(currentTextLeft,currentTextTop,textWidth,textHeight)
        ctx.fillRect(currentTextLeft,currentTextTop,textWidth,textHeight);
    
    }
  
     ctx.fillStyle = obj.color;
     ctx.font = ` ${obj.textStyle} ${obj.fontSize}px Arial`
     let t = ctx.fillText(text, obj.left, obj.top)
     textWidth =Math.floor(ctx.measureText(text).width);
     textHeight=parseInt(ctx.font);
     currentTextLeft =obj.left;
     currentTextTop =obj.top;
   
    obj.left=textWidth+obj.left + 10;
  
}






//this  function check which shape draw
function drawShape(e) {

    check = true;
    let shape = e.getAttribute("data-shape");
    if (shape == 'square') {
        triangle = false;
        shapeValue.width = 50;
        shapeValue.height = 50;
        shapeDrawer(shapeValue)

    } else if (shape == 'rectangle') {
        triangle = false
        shapeValue.width = 50;
        shapeValue.height = 25;
        shapeDrawer(shapeValue)

    } else {

        triangle = true;
        circleDraw()
    }

}






//this  function is shape drawing
function shapeDrawer(shapeValue) {
    currentShape ='square'

    if (obj.left + 55 >= 1000) {
        obj.top = obj.top + 60;
        obj.left = 5;
    }
    ctx.fillStyle = obj.color;
     currentImage = {
        left :obj.left,
        top :obj.top,
        width :shapeValue.width,
        height : shapeValue.height
    }
    ctx.fillRect(obj.left, obj.top, shapeValue.width, shapeValue.height)
    obj.left = shapeValue.width + obj.left + 5;
}



//this  function is circle drawer
function circleDraw() {
    currentShape ='circle'

    if (obj.left + 55 >= 1000) {
        obj.top = obj.top + 60;
        obj.left = 5;
    }
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(obj.left + 25, obj.top + 20, 25, 20, 2, 2 * Math.PI);
    ctx.fillStyle = obj.color;
    ctx.fill();
    ctx.beginPath();
    obj.left = obj.left + 25 + 30;
}


//this is function upload image and img drawer
function uploadImage(e) {

    let src = URL.createObjectURL(e.files[0]);
    let img = new Image();
    img.src = src;
    img.onload = function () {
        ctx.drawImage(img, 40, 40, 300, 200);
    };

}


//this  function  draw triangle 
function drawTriangle() {
    currentShape ='triangle'
    if (obj.left + 55 >= 1000) {
        obj.top = obj.top + 60;
        obj.left = 5;
    }

    var top = obj.top;
    var left = obj.left;
    ctx.fillStyle = obj.color;
    ctx.beginPath();
    ctx.moveTo(left + 30, top)
    ctx.lineTo(left + 10, top + 40)
    ctx.lineTo(left + 50, top + 40)
    ctx.fillStyle = obj.color;
    ctx.fill();
    ctx.beginPath();
    obj.left = left + 55;
}


//this is function is drag element and cature x y position
// function drag(e, event) {
//     x.push(event.clientX);
//     y.push(event.clientY);
//     event.preventDefault();
//     console.log(true)
// }


//this is function is dragElement capture and that  is align this position

// function capture(e) {

//     let l = x[x.length - 2] - 400
//     let t = y[y.length - 2] - 200
//     e.style.marginLeft = l + 'px'
//     e.style.marginTop = t + 'px';
//     x = []
//     y = [];


// }





function textEnter(e, event) {
    let x = event.clientX;
    let y = event.clientY;
    textPanel.style.display = 'block';
    textPanel.style.top = y + 'px'
    textPanel.style.left = x + 'px'
    textPanel.innerText = "";
    textPanel.setAttribute('contenteditable', 'true')
    textPanel.focus();
}


// textPanel.onblur = function (e, event) {
//     query = e.target.innerText;
//     draw(query)
//     e.target.style.display = 'none'
//     event.preventDefault()
// }


function fillText(e, event) {

    if (event.keyCode === 13) {
        query = e.innerText;
        draw(query)
        e.style.display = 'none'
    }
}

//clear canvas
function clearCanvas () {
    ctx.clearRect(0,0,1000,700);
    obj.left = 5;
    obj.top = 5;
}

console.log(CANVAS_PAINTER)