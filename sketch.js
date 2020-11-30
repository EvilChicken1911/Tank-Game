const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var canvas, backgroundimage;
var database, gameState = 0, playerCount = 0, form, player, game;
var allPlayers;
var distance = 0;
var greentank, bluetank, yellowtank, redtank, tanks;
var greentankimg, bluetankimg, yellowtankimg, redtankimg;
var rock1, rock2, rock3, rock4, rock5, rock6, rock7, rock8, rock9, rock10;
var rockimg;
var rocks;

function preload(){
    greentankimg = loadImage("Green Tank.jpg");
    bluetankimg = loadImage("Blue Tank.jpg");
    yellowtankimg = loadImage("Yellow Tank.jpg");
    redtankimg = loadImage("Red Tank.jpg");
    rockimg = loadImage("rock.png");
}

function setup(){
    canvas = createCanvas(displayWidth-20, displayHeight-30);
    database = firebase.database();
    engine = Engine.create();
    world = engine.world;
    colors = [greentankimg, bluetankimg, yellowtankimg, redtankimg];
    rock1 = createSprite(1200,1500);
        rock1.addImage("rock.png",rockimg);
        rock1.scale = 0.30;
        rock2 = createSprite(275,2000);
        rock2.addImage("rock.png",rockimg);
        rock2.scale = 0.63;
        rock3 = createSprite(width/2,height/2);
        rock3.addImage("rock.png",rockimg);
        rock3.scale = 0.80;
        rock4 = createSprite(width/2+800,height/2-200);
        rock4.addImage("rock.png",rockimg);
        rock4.scale = 0.35;
        rock5 = createSprite(250,300);
        rock5.addImage("rock.png",rockimg);
        rock5.scale = 0.30;
        rock6 = createSprite(700,800);
        rock6.addImage("rock.png",rockimg);
        rock6.scale = 0.25;
        rock7 = createSprite(1800,900);
        rock7.addImage("rock.png",rockimg);
        rock7.scale = 0.35;
        rock8 = createSprite(1000,800);
        rock8.addImage("rock.png",rockimg);
        rock8.scale = 0.63;
        rock9 = createSprite(250,1800);
        rock9.addImage("rock.png",rockimg);
        rock9.scale = 0.35;
        rock10 = createSprite(300,700);
        rock10.addImage("rock.png",rockimg);
        rock10.scale = 0.5;
        rocks = [rock1, rock2, rock3, rock4, rock5, rock6, rock7, rock8, rock9, rock10];
    //tank1 = new Tank(500,750);
        /*greenbody = Bodies.circle(100,200,5,{isStatic: true});
        World.add(world,greenbody);
        redbody = Bodies.circle(300,500,5,{isStatic: true});
        World.add(world,redbody);
        yellowbody = Bodies.circle(700,700,5,{isStatic: true});
        World.add(world,yellowbody);
        bluebody = Bodies.circle(700,200,5,{isStatic: true});
        World.add(world,bluebody);*/
        game = new Game();
    game.getState();
    game.start()
}

function draw()
{
    if(playerCount == 4)
    {
        game.update(1);
    }
    if(gameState ==1)
    {
        clear();
        form.hide();
        background(rgb(255, 207, 158));
        /*greentank = createSprite(100,200);
        greentank.addImage("Green Tank.jpg",greentankimg);
        greentank.scale = 0.5;
        redtank = createSprite(300,500);
        redtank.addImage("Red Tank.jpg",redtankimg);
        redtank.scale = 0.5;
        yellowtank = createSprite(700,700);
        yellowtank.addImage("Yellow Tank.jpg",yellowtankimg);
        yellowtank.scale = 0.5;
        bluetank = createSprite(700,200);
        bluetank.addImage("Blue Tank.jpg",bluetankimg);
        bluetank.scale = 0.5;
        tanks = [greentank, redtank, yellowtank, bluetank];*/
        
        drawSprites();
        game.play();
    }
    /*if(gameState == 2)
    {
        game.end();
    */}

/*function mousePressed()
{
    if(tanks[0] !== redtank)
    {
        //tanks.splice(0,1,redtank);
        //tank[0].addImage("Red Tank.jpg",redtankimg);
        redtank.visible = false;
        yellowtank.visible = false;
        bluetank.visible = false;
        console.log("This is red tank.");
    }
}*/

/*function mouseDragged()
{
    textSize(25);
    text("testing mouse controls", 200,200);
}*/