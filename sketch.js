var cat,mouse,catImage,mouseImage,catImage2,mouseImage2,mouseImage3,catImage3;
var bg;


function preload() {
    bg = loadImage("images/garden.png");
    catImage= loadImage("images/tomOne.png");
    catImage2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    catImage3 = loadAnimation("images/tomFour.png");
    mouseImage= loadImage("images/jerryOne.png");
    mouseImage2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    mouseImage3 = loadAnimation("images/jerryFour.png");

    //load the images here
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600);
    cat.addImage("tomSleeping", catImage);
    cat.scale = 0.2;
    mouse = createSprite(200,600);
    mouse.addImage("jerryStanding",mouseImage);
    mouse.scale = 0.15;

    //create tom and jerry sprites here

}

function draw() {

    background(bg);

    if(cat.x - mouse.x < cat.width/2-mouse.width/2){
        cat.velocityX = 0;
        cat.addAnimation("tomLastImage",catImage3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("tomLastImage");
        mouse.addAnimation("jerryLastImage",mouseImage3);
        
        mouse.scale = 0.2;
        mouse.changeAnimation("jerryLastImage");
    }
    keyPressed();
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if(keyDown("LEFT_ARROW")){
        cat.velocityX = -5;
        cat.addAnimation("tomRunning",catImage2);
        cat.changeAnimation("tomRunning");
        mouse.addAnimation("jerryRunning",mouseImage2);
        mouse.changeAnimation("jerryRunning");
    }
  //For moving and changing animation write code here


}
