canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x = 10;
rover_y = 10;
nasa_mars_images_array = ["NASA.jfif", "NASA2.jifif", "rocks.jpg", "SAND.jpg"]
random_number = Math.floor(Math.random()*4);
background_image =  nasa_mars_images_array[random_number];
function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;   

rover_img_Tag = new Image();
rover_img_Tag.onload = uploadrover;
rover_img_Tag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImgae(rover_img_Tag, rover_x, rover_y, rover_width, rover_height);
}



window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
       if(keyPressed == '38')
       {
           up();
           console.log("up");

       }

       if(keyPressed == '40')
       {
           down();
           console.log("down");

       }

       if(keyPressed == '37')
       {
           left();
           console.log("left");

       }

       if(keyPressed == '39')
       {
           right();
           console.log("right");

       }
}


function up()
{
   if(rover_y >=0) 
   {
       rover_y -= 10;
       console.log("when up arrow key is pressed =" + rover_x + "-"+rover_y);
       uploadBackground();
       uploadrover();
   }
}

function down()
{
   if(rover_y <=500) 
   {
       rover_y += 10;
       console.log("when down arrow key is pressed =" + rover_x + "-"+rover_y);
       uploadBackground();
       uploadrover();
   }
}

function left()
{
   if(rover_x >=0) 
   {
       rover_x -= 10;
       console.log("when left arrow key is pressed =" + rover_x + "-"+rover_y);
       uploadBackground();
       uploadrover();
   }
}

function right()
{
   if(rover_x <= 700) 
   {
       rover_x += 10;
       console.log("when right arrow key is pressed =" + rover_x + "-"+rover_y);
       uploadBackground();
       uploadrover();
   }
}