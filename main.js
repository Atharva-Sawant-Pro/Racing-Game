canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_w=100;
car_h=90;
car_img="race_car.png";
car_x=10;
car_y=10;

car2_w=100;
car2_h=90;
car2_img="race_car_2.png";
car2_x=10;
car2_y=10;
function add(){
    bg_img=new Image();
    bg_img.onload=uploadbg;
    bg_img.src=background_img;
    
    car_img=new Image();
    car_img.onload=uploadcar;
    car_img.src=race_car.png;
}
function uploadbg(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(car_img,car_x,car_y,car_w,car_h);
}
window.addEventListener("keydown",ke_down);
function ke_down(e){
    key_press=e.keyCode;
    if(key_press=='38'){
        up();
    }
    if(key_press=='40'){
        down();
    }
    if(key_press=='37'){
        left();
    }
    if(key_press=='39'){
        right();
    }
}
function up(){
    if(car_y>=0){
        car_y=car_y-10;
        uploadbg();
        uploadcar();
        uploadcar2();
    }
}
function down(){
    if(car_y<=500){
        car_y=car_y+10;
        uploadbg();
        uploadcar();
        uploadcar2();
    }
}
function left(){
    if(car_x>=0){
        car_x=car_x-10;
        uploadbg();
        uploadcar();
        uploadcar2();
    }
}
function right(){
    if(car_x<=700){
        car_x=car_x+10;
        uploadbg();
        uploadcar();
        uploadcar2();
    }
}
function add(){
    bg_img=new Image();
    bg_img.onload=uploadbg;
    bg_img.src=background_img;
    
    car2_img=new Image();
    car2_img.onload=uploadcar2;
    car2_img.src=race_car_2.png;
}
function uploadbg(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}
function uploadcar2(){
    ctx.drawImage(car2_img,car2_x,car2_y,car2_w,car2_h);
}
window.addEventListener("keydown",ke_down);
function ke_down(e){
    key_press=e.keyCode;
    if(key_press=='87'){
        up();
    }
    if(key_press=='83'){
        down();
    }
    if(key_press=='68'){
        left();
    }
    if(key_press=='65'){
        right();
    }
}
function up(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        uploadbg();
        uploadcar2();
        uploadcar();
    }
}
function down(){
    if(car2_y<=500){
        car2_y=car2_y+10;
        uploadbg();
        uploadcar2();
        uploadcar();
    }
}
function left(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        uploadbg();
        uploadcar2();
        uploadcar();
    }
}
function right(){
    if(car2_x<=700){
        car2_x=car2_x+10;
        uploadbg();
        uploadcar2();
        uploadcar();
    }
}