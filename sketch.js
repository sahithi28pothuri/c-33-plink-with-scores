Engine = Matter.Engine;
World = Matter.World;
Events = Matter.Events;
Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score = 0;
var scoreA = 500;
var scoreB = 100;
var scoreC = 200;
var divisions = [];
var gameState = "play";
var particle;
var turn = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }

}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+ score,20,30);
  Engine.update(engine);

  stroke("yellow");
  line(0,450,800,450);

   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-300, width/2+300), 10,10));
   }
 
    for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }*/

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   scoreShow();
   Scoring();
}

function scoreShow(){

  for(var z = 0; z<=width/3; z = z+80){
    text(scoreA,z+20, height-divisionHeight+30);
  }

  for(var w = 150; w<=(width/2-30); w = w+80){
    text(scoreB,w+200, height-divisionHeight+30);
  }

  for(var t = 300; t<=(width-30); t = t+80){
    text(scoreC,t+290, height-divisionHeight+30);
  }

}

function Scoring(){

  if(turn >5){
    particle = null;
    textSize(35);
    stroke("orange");
    fill("orange");
    text("GAME OVER",300,240);
    gameState = "end";
    if(gameState==="end"){
      console.log("turns end");
    }
  }

  if(gameState === "end"){
    
  }

  if(particle != null){

    particle.display();

    if(particle.body.position.y>600){

      console.log("yesss");

      if(particle.body.position.x>10 && particle.body.position.x<300 ){
        score = score + 500;
        particle = null;
      }

      else if(particle.body.position.x>301 && particle.body.position.x<570){
        score = score + 100;
        particle = null;
      }

      else if(particle.body.position.x>571 && particle.body.position.x<=800){
        score = score +200;
        particle = null;
      }

    }
     
  }

  
}

function mousePressed(){
  if(gameState !== "end"){
      turn++;
      particle = new Particle(mouseX,10,10);
  }
      
}