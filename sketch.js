var canvas, backgroundimage;
var database, gameState = 0, playerCount = 0, form, player, game;
var allPlayers;
var distance = 0;
var greentank, bluetank, yellowtank, redtank, tanks;
var greentankimg, bluetankimg, yellowtankimg, redtankimg;

function preload(){
    greentankimg = loadImage("Green Tank.jpg");
    bluetankimg = loadImage("Blue Tank.jpg");
    yellowtankimg = loadImage("Yellow Tank.jpg");
    redtankimg = loadImage("Red Tank.jpg");
}

function setup(){
    canvas = createCanvas(displayWidth-20, displayHeight-30);
    database = firebase.database();
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
        greentank = createSprite(100,200);
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
        tanks = [greentank, redtank, yellowtank, bluetank];
        drawSprites();
        /* game.play();
    }
    if(gameState == 2)
    {
        game.end();
    */}
}