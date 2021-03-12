
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
  engine = Engine.create();
    world = engine.world;  

    
    ground = new Ground(600, 390, 1200, 20);
    platform1 = new Ground(390, 300, 300, 20);
    platform2 = new Ground(800, 200, 240, 20);
    polygon= new Polygon(100,100,100,100)

//floorn 1
//block17= new Block(300,275,30,40)
//block18 = new Block(330,275,30,40)
//block19 = new Block(360,275,30,40)
//block20 = new Block(390,275,30,40)
//block21 = new Block(420,275,30,40)

//floor 1
block1 = new Block(300,275,30,40)
block2 = new Block(330,275,30,40)
block3 = new Block(360,275,30,40)
block4 = new Block(390,275,30,40)
block5 = new Block(420,275,30,40)
block6 = new Block(450,275,30,40)
block7 = new Block(480,275,30,40)
//floor 2
block8 = new Block(330,235,30,40)
block9 = new Block(360,235,30,40)
block10 = new Block(390,235,30,40)
block11 = new Block(420,235,30,40)
block12 = new Block(450,235,30,40)
//floor 3
block13 = new Block(360,195,30,40)
block14 = new Block(390,195,30,40)
block15 = new Block(420,195,30,40)
//floor 4
block16= new Block(390,155,30,40)

//floor 1
block17= new Block(800,175,30,40)
block18 = new Block(830,175,30,40)
block19 = new Block(860,175,30,40)
block20 = new Block(770,175,30,40)
block21 = new Block(740,175,30,40)

//floor 2
block22= new Block(830,135,30,40)
block23 = new Block(800,135,30,40)
block24 = new Block(770,135,30,40)

//floor 3
block25= new Block(800,95,30,40)
   

slingshot = new Sling(polygon.body,{x:125,y:125})
}

//polygon = Bodies.circle(50,200,20)
//World.add(world,polygon)

//slingshot = new Sling(this.polygon,{x:100,y:200})

//imageMode(CENTER)
//image(polygon_img ,polygon.position.x,polygon.position.y,40,40)

function draw(){
    background("black")
    Engine.update(engine);
    strokeWeight(4);
  
    ground.display()
    platform1.display()
    platform2.display()

    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()
    block19.display()
    block20.display()
    block21.display()
    block22.display()
    block23.display()
    block24.display()
    block25.display()
    polygon.display()
    slingshot.display()


}

//function mouseDragged(){
   // Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//}


function mouseReleased(){
    sling.fly();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
}
