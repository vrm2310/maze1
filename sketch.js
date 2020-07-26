var x,y;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tunnelImg,textImg;

//preload to load the pipe & text image
function preload()
{
	tunnelImg = loadImage("pipe_image.png");
	textImg = loadImage("message.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	maze=new Maze(200,320);
	
mainground=new ground(200,500,400,20);

	key=new Key(280,420,10);
	tunnel = createSprite(200,130);
	tunnel.addImage(tunnelImg);
	tunnel.scale=0.5;
	text = createSprite(520,200);
	text.addImage(textImg);
	text.scale=0.4;

slingshot = new SlingShot(maze.body,key.body);

	Engine.run(engine);
	a=0;
}


function draw() {
  
  background(0);
  fill("red");
 maze.display();
  fill("pink");
 
 mainground.display();

 key.display();
 drawSprites();
slingshot.display();

a=a+0.2;

{
Matter.Body.setAngle(maze.body,a);

}

 
}


  function keyPressed()
  {
	if(keyIsDown(UP_ARROW)){
		if(key.body.position!=null)
		{
			if(key.body.position.x>180 && key.body.position.x<200)
			{
				slingshot.fly();
			}
		}
	}
  }