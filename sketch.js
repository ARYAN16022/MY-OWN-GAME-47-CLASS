const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, castle1, castle;

function preload() {
  backgroundImg = loadImage("sprites/sbg.jpg");
  castle1 = loadImage("sprites/castle.png");
  obstacle1 = loadAnimation(
    "enemies/b1.png",
    "enemies/b2.png",
    "enemies/b3.png"
  );
  obstacle2 = loadAnimation(
    "enemies/e1.png",
    "enemies/e2.png",
    "enemies/e3.png"
  );
  obstacle3 = loadAnimation("enemies/g1.png", "enemies/g2.png");
  obstacle4 = loadAnimation(
    "enemies/p1.png",
    "enemies/p2.png",
    "enemies/p3.png",
    "enemies/p4.png"
  );
  obstacle5 = loadAnimation("enemies/s1.png", "enemies/s2.png");

  player1 = loadAnimation(
    "sprites/l-1.png",
    "sprites/l-2.png",
    "sprites/l-3.png"
  );
  player2 = loadAnimation(
    "sprites/r-1.png",
    "sprites/r-2.png",
    "sprites/r-3.png"
  );
  brick = loadImage("sprites/bricks1.jpg");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  castle = createSprite(800, 300);
  player = createSprite(900, 450);
  player.addAnimation("l", player1);
  player.addAnimation("r", player2);

  b1 = createSprite(1200, 300);
  b1.addImage(brick);
  b1.scale = 0.1;

  b2 = createSprite(1100, 500);
  b2.addImage(brick);
  b2.scale = 0.1;

  b3 = createSprite(600, 350);
  b3.addImage(brick);
  b3.scale = 0.1;

  b6 = createSprite(700, 100);
  b6.addImage(brick);
  b6.scale = 0.1;

  b8 = createSprite(600, 100);
  b8.addImage(brick);
  b8.scale = 0.1;

  b9 = createSprite(1100, 100);
  b9.addImage(brick);
  b9.scale = 0.1;

  b15 = createSprite(700, 550);
  b15.addImage(brick);
  b15.scale = 0.1;

  b17 = createSprite(900, 550);
  b17.addImage(brick);
  b17.scale = 0.1;

  castle.addImage(castle1);
  castle.scale = 1.5;
  player.scale = 0.5;

  ObstaclesGroup = new Group();
}

function draw() {
  background(backgroundImg);
  if (keyDown("LEFT_ARROW")) {
    player.changeAnimation("l", player1);
    player.x = player.x - 30;
  } else if (keyDown("RIGHT_ARROW")) {
    player.changeAnimation("r", player2);
    player.x = player.x + 30;
  } else if (keyDown("UP_ARROW")) {
    player.changeAnimation("l", player1);
    player.y = player.y - 30;
  } else if (keyDown("DOWN_ARROW")) {
    player.y = player.y + 30;
    player.changeAnimation("r", player2);
  } else {
    player.changeAnimation("r", player2);
  }
  spawnObstacles();
  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(200, 225);
    console.log(123);

    //generate random obstacles
    var rand = Math.round(random(1, 5));
    switch (rand) {
      case 1:
        obstacle.addAnimation("b", obstacle1);
        obstacle.x = random(125, 300);
        obstacle.y = random(125, 300);
        break;
      case 2:
        obstacle.addAnimation("e", obstacle2);
        obstacle.x = random(425, 200);
        obstacle.y = random(425, 200);
        break;
      case 3:
        obstacle.addAnimation("g", obstacle3);
        obstacle.x = random(525, 300);
        obstacle.y = random(425, 300);

        break;
      case 4:
        obstacle.addAnimation("p", obstacle4);
        obstacle.x = random(525, 300);
        obstacle.y = random(425, 300);
        break;
      case 5:
        obstacle.addAnimation("s", obstacle5);
        obstacle.x = random(525, 300);
        obstacle.y = random(425, 300);
        break;
      default:
        break;
    }

    //assign scale and lifetime to the obstacle
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}
