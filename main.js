mouseX=0;
mouseY=0;


function preload(){
    " "
    }
    
    
    
    function setup(){
      canvas = createCanvas(400,400);
      canvas.center();
      background("white");
    
    
    }
    
    
    function draw(){
    if(mouseIsPressed){
      fill(0);
    }
    else{
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80)
    }

    ellipse(mouseX, mouseY, 80, 80)
    
    
    function erase(){
        background("white");
    }