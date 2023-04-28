const divELement=document.querySelector('#query');
const canvas=document.querySelector('canvas');
const ctx=canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
let topInp=document.querySelector('#top')
let ele;
let currentText="";
let text;
let query='';
let check=false;
let triangle=false;




const obj={
    width:800,
    height:400,
    color:'#FB8332',
    left:20,
    top:20,
    fontSize:20,
    textStyle:'normal'
    
}

const shapeValue = {
    x:10,
    y:10,
    width:300,
    height:300
}

function drawer() {
    check=false
     query=divELement.innerText;
    draw(query);
}

function setFontSize(e){
    let temp=obj.fontSize;
    obj.fontSize=e.value;
    temp > e.value ? obj.top +=e.value -temp : obj.top -= temp-e.value;
    
  check ? null: topInp.value=obj.top;
    check?null:draw(query);
}

function setPosition(e){

    e.name=='left'?obj.left=e.value:obj.top=e.value;

    if(check) {

        triangle ? circleDraw() :shapeDrawer(shapeValue);

    } else {

        draw(query);

    }
    

   

}

function changeColor(e){
   
    obj.color=e.value;
    ctx.fillStyle=obj.color;

    if(check) {

        triangle ? circleDraw() :shapeDrawer(shapeValue);

    } else {
        draw(query);
    }
}



function textStyleChanger(e){

    if( e == ele ) {
        e.classList.remove('selected')
        obj.textStyle='normal';
        check?null:draw(query);
        return ''

    }
      
    if(ele){
        ele.classList.remove('selected')
    }
    ele=e;
    ele.classList.add('selected')
     obj.textStyle=e.getAttribute("data-name");
     check?null:draw(query);
}


function draw(text){
    ctx.clearRect(0,0,obj.width,obj.height)
    ctx.fillStyle=obj.color;
    ctx.font=` ${obj.textStyle} ${obj.fontSize}pt Courier`
    ctx.fillText(text,obj.left,obj.top)
}

function drawShape (e) {
    ctx.clearRect(0,0,obj.width,obj.height)

    check=true;
    let shape=e.getAttribute("data-shape");
    if(shape == 'square'){

         triangle=false;
        shapeValue.width=50;
        shapeValue.height=50;
        shapeDrawer(shapeValue)

    } else if( shape == 'rectangle' ){
          triangle=false
        shapeValue.width=50;
        shapeValue.height=25;
        shapeDrawer(shapeValue)

    } else {

        triangle=true;
        circleDraw() 
    }
}


function shapeDrawer(shapeValue){
  
    ctx.clearRect(0,0,obj.width,obj.height)
    ctx.fillStyle=obj.color;
    ctx.fillRect(obj.left,obj.top,shapeValue.width,shapeValue.height)
 }

 //circle drawer
function circleDraw(){
   
    ctx.clearRect(0, 0, 500, 500)
   
    ctx.arc( 20, 20, 20, 0,  2 * Math.PI);
    ctx.fillStyle=obj.color;
    ctx.fill();
 

}

// function uploadImage(e){
//     const imgObj = new Image(e);

//     imgObj.onload = function () {
//       ctx.drawImage(imgObj, 0, 0, obj.width, obj.height);
//     };
 
// }


function drawTriangle () {


    ctx.clearRect(0,0,obj.width,obj.height)
    ctx.fillStyle=obj.color;
     ctx.beginPath();
     ctx.moveTo(20,0)
     ctx.lineTo(0,35)
     ctx.lineTo(40,35)
     ctx.fillStyle = obj.color;
     ctx.fill();
     ctx.moveTo(20,20)
}