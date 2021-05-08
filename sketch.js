const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; //TO AVOID WRITING LONG CODES

var engine , world;
var ground , paper;
var dustbin , dustbinimage;

//PRELOAD FUNCTION IS NOT NEEDED

function setup(){

    dustbinimage = loadImage("Dustbin.png")
    //CANVAS,ENGINE,WORLD CREATION 
    createCanvas(1200 , 800)
    engine = Engine.create()
    world = engine.world;

    //GROUND AND PAPER
    ground = new Ground (600,750,1200,20)
    paper = new Paper (100,710,50)

    //DUSTBIN CONSTRUCTION
    dustbin_L = new Dustbin (850,640,20,160)
    dustbin_R = new Dustbin (1050,640,20,160)
    dustbin_B = new Dustbin (950,730,180,20)

}

function draw(){
    background("white")
    Engine.update(engine);

    //TO CALL DISPLAY FUNCTION CREATED IN CLASS
    ground.display();
    paper.display();

    //TO CALL DISPLAY FUNCTION CREATED IN CLASS
    dustbin_L.display();
    dustbin_R.display();
    dustbin_B.display();
    image(dustbinimage,830,550,250,190);
}

function keyPressed(){
    if (keyCode === UP_ARROW)
    {
        Body.applyForce(paper.body,paper.body.position,{x:150,y:-120});
    }
}
