var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

nasa_array = ["nasaimg1.jpg", "nasaimg2.jpg", "nasaimg3.jpg", "nasaimg4.jpg"];
randomnumber = Math.floor(Math.random()*4);

var rover_height = 100;
var rover_width = 90;
var rover_x = 10;
var rover_y = 10;

var canvasbg = nasa_array[randomnumber]
var roverimg = "rover.png"


function Add(){
    canvas_bgtag = new Image();
    canvas_bgtag.onload = uploadBackground;
    canvas_bgtag.src = canvasbg;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadRover;
    rover_imgtag.src = roverimg;
}

function uploadBackground(){
    ctx.drawImage(canvas_bgtag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if (key_pressed == '38'){
        up();
        console.log("Up Key has been Pressed");
    }

    if (key_pressed == '40'){
        down();
        console.log("Down key has been Pressed");
    }

    if (key_pressed == '37'){
        left();
        console.log("Left key has been pressed");
    }

    if (key_pressed == '39'){
        right();
        console.log("Right key has been Pressed");
    }
}

function up(){
    if (rover_y > 0){
        rover_y = rover_y - 10;
        console.log("UP IS PRESSED: X: " + rover_x + ", Y: " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if (rover_y < 500){
        rover_y = rover_y + 10;
        console.log("DOWN IS PRESSED: X: " + rover_x + ", Y: " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if (rover_x > 0){
        rover_x = rover_x - 10;
        console.log("LEFT IS PRESSED: X: " + rover_x + ", Y: " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if (rover_x < 700){
        rover_x = rover_x + 10;
        console.log("RIGHT IS PRESSED: X: " + rover_x + ", Y: " + rover_y);
        uploadBackground();
        uploadRover();
    }
}