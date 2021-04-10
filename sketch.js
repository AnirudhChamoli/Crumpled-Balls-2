const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; //TO AVOID WRITING LONG CODES

var engine , world;
var ground , paper;
var dustbin;

//PRELOAD FUNCTION IS NOT NEEDED

function setup(){

    //CANVAS,ENGINE,WORLD CREATION 
    createCanvas(1200 , 800)
    engine = Engine.create()
    world = engine.world;

    //GROUND AND PAPER
    ground = new Ground (600,750,1200,20)
    paper = new Paper (100,710,50)

    //DUSTBIN CONSTRUCTION
    dustbin_L = new Dustbin (800,640,20,160)
    dustbin_R = new Dustbin (1100,640,20,160)
    dustbin_B = new Dustbin (950,730,280,20)

}

function draw(){
    background("grey")
    Engine.update(engine);

    //TO CALL DISPLAY FUNCTION CREATED IN CLASS
    ground.display();
    paper.display();

    //TO CALL DISPLAY FUNCTION CREATED IN CLASS
    dustbin_L.display();
    dustbin_R.display();
    dustbin_B.display();

}

function keyPressed(){
    if (keyCode === UP_ARROW)
    {
        Body.applyForce(paper.body,paper.body.position,{x:150,y:-120});
    }
}
