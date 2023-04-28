const divELement = document.querySelector('#query');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
let topInp = document.querySelector('#top')
let ele;
let currentText = "";
let text;
let query = '';
let check = false;
let triangle = false;




const obj = {  //this obj has position, background and font style
        width: 800,
    height: 400,
    color: '#FB8332',
    left: 10,
    top: 10,
    fontSize: 20,
    textStyle: 'normal'

}


const shapeValue = { //this obj has shape prorerties
    x: 10,
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

    e.name == 'left' ? obj.left = e.value : obj.top = e.value;

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

    if (check) {

        triangle ? circleDraw() : shapeDrawer(shapeValue);

    } else {
        draw(query);
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
function draw(text) {
    
    if( obj.left > 200 && obj.top > 20 ) {
        obj.left = 10;
        obj.top = 10;
    }

   ctx.clearRect(0, 0, obj.width, obj.height)
    ctx.fillStyle = obj.color;
    ctx.font = ` ${obj.textStyle} ${obj.fontSize}px Courier`
    ctx.fillText(text, obj.left, obj.top + 10)
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

   if(obj.left > 250 ){
    obj.top = 80;
    obj.left =10;
   }

    ctx.fillStyle = obj.color;
    ctx.fillRect(obj.left, obj.top, shapeValue.width, shapeValue.height)
    obj.left = shapeValue.width + obj.left + 10;
  
}



//this  function is circle drawer
function circleDraw() {

    ctx.fillStyle ="#fff";
    ctx.fill();
    ctx.beginPath();
    ctx.arc( obj.left + 10, obj.top + 10, 20, 20, 0, 2 * Math.PI);
    ctx.fillStyle = obj.color;
    ctx.fill();
    obj.left=obj.left + 40;
        
 


}


//this is function upload image and img drawer
// function uploadImage(e){
//     const imgObj = new Image(e);

//     imgObj.onload = function () {
//       ctx.drawImage(imgObj, 0, 0, obj.width, obj.height);
//     };

// }


//this  function  draw triangle 
function drawTriangle() {



    // ctx.clearRect(0, 0, obj.width, obj.height)
    ctx.fillStyle = obj.color;
    ctx.beginPath();
    ctx.moveTo(obj.left, obj.top)
    ctx.lineTo(0, 35)
    ctx.lineTo(40, 35)
    ctx.fillStyle = obj.color;
    ctx.fill();
    ctx.moveTo(20, 20)
}