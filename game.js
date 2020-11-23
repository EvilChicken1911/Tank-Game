class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    /*greentank = createSprite(100,200);
    greentank.addImage("Green Tank.jpg",greentankimg);
    redtank = createSprite(300,200);
    redtank.addImage("Red Tank.jpg",redtankimg);
    yellowtank = createSprite(500,200);
    yellowtank.addImage("Yellow Tank.jpg",yellowtankimg);
    bluetank = createSprite(700,200);
    bluetank.addImage("Blue Tank.jpg",bluetankimg);
    tanks = [greentank, redtank, yellowtank, bluetank];
    drawSprites();*/
    
  }

  /*showTank()
  {
    greentank.addImage("Green Tank.jpg",greentankimg);
    redtank.addImage("Red Tank.jpg",redtankimg);
    yellowtank.addImage("Yellow Tank.jpg",yellowtankimg);
    bluetank.addImage("Blue Tank.jpg",bluetankimg);
    }*/

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(trackimg, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank +=1
      Player.updateCarsAtEnd(player.rank)
    }
   
    
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}