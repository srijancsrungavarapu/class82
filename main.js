var mouseEvent="empty";
var last_x,last_y;
canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clienty-canvas.offsettop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath(); 
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
   last_x=current_x;
   last_y=current_y;
}
canvas.addEventListener("mouseup",mr_mouseup);
function mr_mouseup(e){    
    mouseEvent="mouseUP";
}
canvas.addEventListener("mousedown",mr_mousedown);
function mr_mousedown(e){    
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseleave",mr_mouseleave);
function mr_mouseleave(e){    
    mouseEvent="mouseleave";
}