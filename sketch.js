// now write function for the boss and the boss attack and also clear and reset
//creating variables for spaceship
var spaceShuttle, spaceShuttleImg;

// creating variables for obstacles
var obstacle1, obtscale2, obstacle3, obstacle4, obstacle5;
var obstacle1img, obstacle2img, obstacle3img, obstacle4img, obstacle5img;
var obstacle1Group, obstacle2Group, obstacle3Group, obstacle4Group, obstacle5Group

// creating avriables for alliens and boss
var alien1, alien2, alien3, alien4, alien1img;
var alien1attackGroup, alien2attackGroup, alien3attackGroup, alien4attackGroup ;
var alienKeeper1 = 0;
var alien1Counter = 3;
var alien2Counter = 3;
var alien3Counter = 3;
var alien4Counter = 3;
var alien11, alien12, alien13, alien14, alien2img; 
var alien11attackGroup, alien12attackGroup, alien13attackGroup, alien14attackGroup;
var alienKeeper2 = 0;
var alien11Counter = 4;
var alien12Counter = 4;
var alien13Counter = 4;
var alien14Counter = 4;
var boss, bossImg;
var bossCounter = 20;
var bossKeeper = 0

// creating variables for attacks and boosters
var alienattackImg, attackImg, bossImg, bossAttackImg, goldenAttackImg
var bossAttackGroup, bossAttack, bossGoldenAttackGroup
var attackArr = []
var attack, goldenAttack
var goldenAttackArr = [] 
var bubbleImg, fuelImg, heartImg, shieldImg
var bubbleF, fuel, bubbleH, heart, bubbleS, shield
var bubbleGroupF, fuelGroup, bubbleGroupH, heartGroup, bubbleGroupS, sheildGroup
var spaceShuttleShield, spaceShuttleShieldImg

// other elements of the game
var life = 5, fuelCount = 10
var time= 0, score = 0
var gameState = "A"
var bg, bg1, bg2, bg3, bg4, bg5
var button, buttonImg, next, nextImg
var points = 0;

function preload(){
//loading images for the backGround
bg1 = loadImage("background/bg1.jpg");
bg2 = loadImage("background/bg2.jpg");
bg3 = loadImage("background/bg3.jpg");
bg4 = loadImage("background/bg4.jpg");
bg5 = loadImage("background/bg5.jpg");

// loading images for the background and the button
spaceShuttleImg = loadImage("character/spaceShuttle.png");
buttonImg = loadImage("character/start.png")
nextImg = loadImage("character/next.png")

//loading images for obstacles
obstacle1img = loadImage("character/obstacle1.png")
obstacle2img = loadImage("character/obstacle2.png")
obstacle3img = loadImage("character/obstacle3.png")
obstacle4img = loadImage("character/obstacle4.png")
obstacle5img = loadImage("character/obstacle5.png")

// loading images for aliens and boss
alien1img = loadImage("character/alien1.png")
alien2img = loadImage("character/alien2.png")
bossImg = loadImage("character/boss.png")

// loading attck images
attackImg = loadImage("character/attack.png")
alienattackImg = loadImage("character/alienattack.png")
bossAttackImg = loadImage("character/bossAttack.png")
goldenAttackImg = loadImage("character/goldenattack.png")

// loading images for the boosters 
bubbleImg = loadImage("booster/bubble.png")
fuelImg = loadImage("booster/fuel.png")
heartImg = loadImage("booster/heart.png")
shieldImg = loadImage("booster/shield.png")
spaceShuttleShieldImg = loadImage("booster/spaceShuttleShield.png")
}

function setup() {
  // creating canvas and its edges
  createCanvas(displayWidth, displayHeight);
  edges = createEdgeSprites()
  
  //creating space shuttle
  spaceShuttle = createSprite(displayWidth/2, displayHeight/2 + 200, 100, 100);
  spaceShuttle.addImage(spaceShuttleImg);
  spaceShuttle.scale = 0.3;
  spaceShuttle.visible = false;
  
  //creatinng the boss
  boss = createSprite(displayWidth/2, displayHeight/2 - 200)
  boss.addImage(bossImg)
  boss.velocityX = -12
  boss.visible = false;

  // creating aliens
  alien1 = createSprite( displayWidth/2 - 200,  displayHeight/2 -200);
  alien1.addImage(alien1img)
  alien1.scale = 0.15
  alien1.visible = false
  alien1.velocityX = -10
  
  alien2 = createSprite(displayWidth/2 + 200, displayHeight/2- 300  );
  alien2.addImage(alien1img)
  alien2.scale = 0.15
  alien2.visible = false
  alien2.velocityX = 10
  
  alien3 = createSprite(displayWidth/2 - 180,  displayHeight/2 -100);
  alien3.addImage(alien1img)
  alien3.scale = 0.15
  alien3.visible = false
  alien3.velocityX = -10

  alien4 = createSprite(displayWidth/2 + 220, displayHeight/2- 300 );
  alien4.addImage(alien1img)
  alien4.scale = 0.15
  alien4.visible = false
  alien4.velocityX = 10

  alien11 = createSprite(displayWidth/2 - 200,  displayHeight/2 -200)
  alien11.addImage(alien2img)
  alien11.scale = 0.85
  alien11.visible = false
  alien11.velocityX = 10

  alien12 = createSprite(displayWidth/2 + 200, displayHeight/2- 300 )
  alien12.addImage(alien2img)
  alien12.scale = 0.85
  alien12.visible = false
  alien12.velocityX = -10
  
  alien13 = createSprite(displayWidth/2 - 180,  displayHeight/2 -100)
  alien13.addImage(alien2img)
  alien13.scale = 0.85
  alien13.visible = false
  alien13.velocityX = 10

  alien14 = createSprite(displayWidth/2 + 220, displayHeight/2- 300)
  alien14.addImage(alien2img)
  alien14.scale = 0.85
  alien14.visible = false
  alien14.velocityX = -10

  // creating groups for alien attacks
 alien1attackGroup = createGroup();
 alien2attackGroup = createGroup();
 alien3attackGroup = createGroup();
 alien4attackGroup = createGroup();
 alien11attackGroup = createGroup();
 alien12attackGroup = createGroup();
 alien13attackGroup = createGroup();
 alien14attackGroup = createGroup();
 bossAttackGroup = createGroup();
 bossGoldenAttackGroup = createGroup();

  // craeting groups for the obstacles
   obstacle1Group = createGroup();
   obstacle2Group = createGroup();
   obstacle3Group = createGroup();
   obstacle4Group = createGroup();
   obstacle5Group = createGroup();

  // creating groups for bubble and boosters
  bubbleGroupF = createGroup();
  fuelGroup    = createGroup();
  bubbleGroupH = createGroup(); 
  heartGroup   = createGroup(); 
  bubbleGroupS = createGroup(); 
  sheildGroup  = createGroup();
 // assigning initial backGround
  bg0 = bg5;
  
 // creating the button
  button = createSprite(displayWidth/2, displayHeight/2, 200, 200);
  button.addImage(buttonImg);
  button.visible = false;
  next = createSprite(displayWidth/2, displayHeight/2, 200, 200);
  next.addImage(nextImg);
  next.visible = false;
  next.scale = 0.4
}

function draw() {
  background(bg0); 
  alien1.bounceOff(edges)
  alien2.bounceOff(edges)
  alien3.bounceOff(edges)
  alien4.bounceOff(edges) 
  alien11.bounceOff(edges)
  alien12.bounceOff(edges)
  alien13.bounceOff(edges)
  alien14.bounceOff(edges)
  boss.bounceOff(edges) 


  if(gameState === "Z"){
    bg0 = bg1
    reset()
    nothing()
    console.log(987654321)
    textSize(25)
    stroke("black")
    fill("white")
    text("OOPS! YOU DIED!", displayWidth/2 - 50, displayHeight/2 - 50)
    text("MISSION FAILED!", displayWidth/2 - 50, displayHeight/2)
    text("PRESS SPACE TO START FROM THE VERY STARTING", displayWidth/2 - 50, displayHeight/2 +50)
    text("PRESS S TO START FROM THE MAIN SCREEN", displayWidth/2 - 50, displayHeight/2+100)
    if(keyDown("s")){
      gameState = 0
    }
    if(keyDown("space")){
      gameState = "A"
    }
    spaceShuttle.visible = false
  }

if(gameState === "A"){
bg0 = bg1
textSize(25)
stroke("black")
fill("white")
text("WELCOME TO SPACE COMBAT", displayWidth/2 - 150, 50)
textSize(20)
text("YOUR PLANET IS PRONE TO ALIEN ATTACK WHICH CAN ERADICTE ENTIRE HUMAN CIVILIZATION AND THE ASTRONOMICAL RESEARCH", 10, 85)
text("AGENCY HAS CHOSEN YOU FOR THIS MISSION TO DEFND YOUR PLANET AND SAVE THE LIFE OF YOUR FELLOW CITIZENS.", 10, 120)
text("YOU HAVE TO ATTACK THE ALIEN AND THIER BOSS SHIP WHICH IS NEAR THE ASTERIOD BELT.", 10, 160)
text("NOW THE DESTINY OF THE PLANET AND THE CIVILIZATION DEPENDS UPON YOU.", 10, 200)
text("ALL THE BEST FOR THE MISSION", 10, 240)
textSize(15)
text("(PRESS RIGHT KEY)", 10, 280)
if(keyDown(RIGHT_ARROW)){
  gameState = "B"
}
  }

if(gameState === "B"){
  textSize(25)
  stroke("black")
  fill("white")
  text("RULES OF THE GAME",displayWidth/2 - 150, 50 )
  textSize(20)
  text("YOU CAN YOU USE THE FOUR ARROW KEYS FOR NAVIGATING THE SPACE SHIP", 10, 90)
  text("REMEMBER YOU CAN NOT CROSS MORE THAN HALF THE SCREEN", 10, 130)
  text("THE GAME WILL BEGIN WITH 5 LIVES AND 10 FUEL.", 10, 170)
  text("ONE LIFE WILL BE DECUTED IF YOU ANY OF METEROIDS OR FIRE BALL HIT YOU.", 10, 210)
  text("IF THE ALIEN'S ATTACK HITS YOU THEN ALSO ONE LIFE WILL BE DEDUCTED.", 10, 250)
  text("THE FUEL COUNT WILL HELP YOU TO GENERATE THE ATTACK AS THE FUEL WILL BE NEEDED", 10, 290)
  text("TO ATTACK EITHER THE ENEMY OR THE OBSTACLES.", 10, 330)
  text("TO GENERATE THE ATTACK PRESS A, ONE ATTACK WILL REDUCE THE FUEL COUNT BY 1", 10, 370)
  text("TO GENERATE THE GOLDEN ATTACK WHICH IS TWICE POWERFUL THAN THE NORMAL ATTACK", 10, 410)
  text("PRESS G, REMEMBER IT WILL REDUCE THE FUEL COUNT BY 2", 10, 450)
  text("BOOSTERS ARE PREESENT TO AID YOUR GAMING EXPERIENCE", 10, 490)
  text("YOUR MAIN AIM IS TO PASS ALL ALL THE STAGES AND DESTROY THE BOSS SHIP IN THE", 10, 530 )
  text("FINAL STAGE I.E. THE 3RD STAGE.", 10, 570)
  textSize(15)
  text("PRESS SPACE TO CONTINUE", 10, 590)
  if(keyDown("space")){
    gameState = 0
  }
}

if(gameState === 0){
  button.visible= true;
  textSize(25)
  stroke("black")
  fill("white")
  text("NOW YOU ARE ALL READY FOR THE COMBAT!", displayWidth/2 - 200, displayHeight/2 - 200)
  if(mousePressedOver(button)){
    gameState = 1;
    button.visible = false;
    
  }
  }

if(gameState === 1){
   bg0 = bg2
   ObstacleOne()
   ObstacleTwo()
   alien()
   if(spaceShuttle.isTouching(obstacle1Group)){
     life -= 0.5
     obstacle1Group.destroyEach()

   }
   if(spaceShuttle.isTouching(obstacle2Group)){
     life -= 0.5
     obstacle2Group.destroyEach()

   }
   if(alienKeeper1 === 2){
     gameState = 1.5
   }
  
  }

if(gameState === 1.5){
  bg0 = bg4
  nothing()
  textSize(40)
  stroke("black")
  strokeWeight(7)
  fill("white")
 text("CONGRATULATIONS! STAGE CLEARED", displayWidth/2 - 250, displayHeight/2 - 150)
  next.visible = true;
if(mousePressedOver(next)){
  next.visible = false;
  gameState = 2;
}

}
 if(gameState === 2){
  bg0 = bg3
  ObstacleOne()
  ObstacleTwo()
  ObstacleThree()
  alienOne()
  if(spaceShuttle.isTouching(obstacle1Group)){
    life -= 0.5
    obstacle1Group.destroyEach()

  }
  if(spaceShuttle.isTouching(obstacle2Group)){
    life -= 0.5
    obstacle2Group.destroyEach()

  }
  if(spaceShuttle.isTouching(obstacle3Group)){
    life -= 0.5
    obstacle3Group.destroyEach()
  }
  if(alienKeeper2 === 2){
    gameState = 2.5
  }
 }

 if(gameState === 2.5){
  bg0 = bg4
  nothing()
  textSize(40)
  stroke("black")
  strokeWeight(7)
  fill("white")
 text("CONGRATULATIONS! STAGE CLEARED", displayWidth/2 - 250, displayHeight/2 - 150)
  next.visible = true;
if(mousePressedOver(next)){
  next.visible = false;
  gameState = 3;
}
 }
 
 if(gameState ===3){
   ObstacleOne();
   ObstacleTwo();
   ObstacleThree();
   BOSS()
   if(spaceShuttle.isTouching(obstacle1Group)){
    life -= 0.5
    obstacle1Group.destroyEach()

  }
  if(spaceShuttle.isTouching(obstacle2Group)){
    life -= 0.5
    obstacle2Group.destroyEach()

  }
  if(spaceShuttle.isTouching(obstacle3Group)){
    life -= 0.5
    obstacle3Group.destroyEach()
  }
  if(bossKeeper === 1){
    gameState = "W";
  }
 }
if(gameState === "W"){
  bg0 = bg1
  nothing()
  textSize(40)
  stroke("black")
  strokeWeight(7)
  fill("white")
  spaceShuttle.visible = false
text("CONGRATULATIONS YOU WON!!", displayWidth/2- 200, displayHeight/2-200 )
text("YOU SAVED THE HUMANS FROM ALIENS", displayWidth/2-200, displayHeight/2- 150)
text("MISSION COMPLETED", displayWidth/2 - 200, displayHeight/2 -100)
  
}

 if(gameState ===1 || gameState ===2 || gameState ===3){
  time += Math.round(frameRate())
  spaceShuttle.visible = true;
    //adding controls to the space shuttle and defining the moveable area
    if(keyDown(UP_ARROW)&&spaceShuttle.y>displayHeight/2){
      spaceShuttle.y -= 10 
    }
    if(keyDown(DOWN_ARROW)&&spaceShuttle.y<displayHeight){
      spaceShuttle.y +=10
    }
    if(keyDown(RIGHT_ARROW)&&spaceShuttle.x< displayWidth){
      spaceShuttle.x += 10
    }
    if(keyDown(LEFT_ARROW)&&spaceShuttle.x> (displayWidth - displayWidth)){
      spaceShuttle.x -= 10; 
    }
    // calling the functions of the boosters
    Heart()
    Shield()
    Fuel()

    Attack()
    GoldenAttack()
    // one life will be incremented if heart booster is touched
    if(spaceShuttle.isTouching(heartGroup)){
      heartGroup.destroyEach()
      bubbleGroupH.destroyEach()
      life +=1
    }
    // fuelCount will be incremented when fuel booster is touched
    if(spaceShuttle.isTouching(fuelGroup)){
      fuelGroup.destroyEach()
      bubbleGroupF.destroyEach(
        fuelCount +=1
      )
    }
   // a shield will appear around the spaceShuttle and protect it for a limited period when shield is touched
  if(spaceShuttle.isTouching(sheildGroup)){
    sheildGroup.destroyEach()
    bubbleGroupS.destroyEach()
    SpaceShuttleShield()
  }
  if(spaceShuttleShield !== undefined){
    spaceShuttleShield.x = spaceShuttle.x
    spaceShuttleShield.y = spaceShuttle.y
    spaceShuttleShield.visible = true
    if(spaceShuttleShield.isTouching(obstacle1Group)){
      obstacle1Group.destroyEach()
} 
    if(spaceShuttleShield.isTouching(obstacle2Group)){
     obstacle2Group.destroyEach()
}
    if(spaceShuttleShield.isTouching(obstacle3Group)){
     obstacle3Group.destroyEach()
}
 }
   
if(life < 0){
  gameState = "Z"
}

  //displaying time, score, life and fuel when the game is started
  textSize(25)
  stroke(5)
  fill("white")
  text("TIME: "+ time, displayWidth/2 - 600, 60)
  text("SCORE: "+score, displayWidth/2 - 600, 90)
  text("LIFE: "+ life, displayWidth/2 - 600, 120)
  text("FUEL: "+fuelCount, displayWidth/2 - 600, 150)
  text("SCORE: "+ points, displayWidth/2 - 600, 180)
 }

 drawSprites();
 
}

function alien(){

  if(gameState === 1){
  if(alienKeeper1 === 0){
  if(alien1Counter >0){
    alien1.visible = true;
    AlienAttack(alien1, alien1attackGroup, alien1Counter)
  }
  if(alien2Counter > 0){
    alien2.visible = true;
    AlienAttack(alien2, alien2attackGroup, alien2Counter)
  }
 if(alien1Counter < 0){
   alien1.visible = false
 }
 if(alien2Counter < 0){
   alien2.visible = false
 }
if(alien1Counter < 0 && alien2Counter < 0){
  alienKeeper1 = 1
}
}
if( alienKeeper1 === 1){
  if(alien3Counter > 0){
    alien3.visible = true;
    AlienAttack(alien3, alien3attackGroup, alien3Counter)
  }
  if(alien4Counter > 0){
    alien4.visible = true;
    AlienAttack(alien4, alien4attackGroup, alien4Counter)
  }
if(alien3Counter < 0){
  alien3.visible = false
}
if(alien4Counter <0){
  alien4.visible = false
}
if(alien3Counter < 0 && alien4Counter < 0){
  alienKeeper1 = 2
}
}
}
}

//MODIFICATION TO BE DONE HERE|| ALIEN FUNCTION TO BE CHANGED AS PER 2ND LEVEL
function alienOne(){

  if(gameState === 2){
  if(alienKeeper2 === 0){

    if(alien11Counter > 0){
      alien11.visible = true;
      AlienAttack(alien11, alien11attackGroup, alien11Counter)
    }
if(alien12Counter){
  alien12.visible = true;
  AlienAttack(alien12, alien12attackGroup, alien12Counter)
}
 if(alien11Counter < 0){
   alien11.visible = false
 }
 if(alien12Counter < 0){
   alien12.visible = false
 }
if(alien11Counter < 0 && alien12Counter < 0){
  alienKeeper2 = 1
}
}
if( alienKeeper2 === 1){
  if(alien13Counter >0){
  alien13.visible = true;
  AlienAttack(alien13, alien13attackGroup, alien13Counter)
  }
  if(alien14Counter > 0){
    alien14.visible = true;
    AlienAttack(alien14, alien14attackGroup, alien14Counter)
  }

if(alien13Counter < 0){
  alien13.visible = false
}
if(alien14Counter <0){
  alien14.visible = false
}
if(alien13Counter < 0 && alien14Counter < 0){
  alienKeeper2 = 2
}
}
}
}

// creating function for the shield of space shuttle
function SpaceShuttleShield(){
  spaceShuttleShield= createSprite(spaceShuttle.x, spaceShuttle.y) 

  
  spaceShuttleShield.addImage(spaceShuttleShieldImg)
  spaceShuttleShield.scale = 0.45
  spaceShuttleShield.lifetime= 350

}


//creating golden attack
function GoldenAttack(){
  if(keyDown("g")&& fuelCount > 1){
    goldenAttackArr.push(createSprite(spaceShuttle.x, spaceShuttle.y))
    for(var i = 0; i < goldenAttackArr.length; i ++){
      
      goldenAttackArr[i].addImage(goldenAttackImg);
      goldenAttackArr[i].scale = 0.2
      goldenAttackArr[i].velocityY = -15
      
      
    }
    fuelCount -= 2
  }
  for(var k =0; k<goldenAttackArr.length; k ++){
    if(goldenAttackArr[k].isTouching(obstacle1Group)){
      obstacle1Group.destroyEach()
      goldenAttackArr.splice(k)
    }
  }
  for(var a =0; a<goldenAttackArr.length; a ++){
    if(goldenAttackArr[a].isTouching(obstacle2Group)){
      obstacle2Group.destroyEach()
      goldenAttackArr.splice(a)
    }
  }
  for(var o =0; o<goldenAttackArr.length; o ++){
    if(goldenAttackArr[o].isTouching(obstacle3Group)){
      obstacle3Group.destroyEach()
      goldenAttackArr.splice(o)
    }
  }
  for(var e =0; e<goldenAttackArr.length; e++){
    if(gameState === 1 && goldenAttackArr[e].isTouching(alien1) && alienKeeper1 === 0){
      alien1Counter -= 2
      goldenAttackArr.splice(e)
    }
  }
  for(var f =0; f<goldenAttackArr.length; f++){
    if(gameState === 1 && goldenAttackArr[f].isTouching(alien2) && alienKeeper1 === 0){
      alien2Counter -= 2
      goldenAttackArr.splice(f)
    }
  }
  for(var g=0; g<goldenAttackArr.length; g++){
    if(gameState === 1 && goldenAttackArr[g].isTouching(alien3) && alienKeeper1 === 1){
      alien3Counter -= 2
      goldenAttackArr.splice(g)
    }
  }
  for(var h=0; h<goldenAttackArr.length; h++){
    if(gameState === 1 && goldenAttackArr[h].isTouching(alien4) && alienKeeper1 === 1){
      alien4Counter -= 2
      goldenAttackArr.splice(h)
    }
  }
  for(var m =0; m<goldenAttackArr.length; m++){
    if( gameState === 2 && goldenAttackArr[m].isTouching(alien11) && alienKeeper2=== 0){
      alien11Counter -= 2
      goldenAttackArr.splice(m)
    }
  }
  for(var n =0; n<goldenAttackArr.length; n++){
    if(gameState === 2 && goldenAttackArr[n].isTouching(alien12)&& alienKeeper2=== 0){
      alien12Counter -= 2
      goldenAttackArr.splice(n)
    }
}
for(var p =0; p<goldenAttackArr.length; p++){
  if(gameState === 2 && goldenAttackArr[p].isTouching(alien13) && alienKeeper2=== 1){
    alien13Counter -= 2
    goldenAttackArr.splice(p)
  }
}
for(var q =0; q<goldenAttackArr.length; q++){
  if(gameState === 2 && goldenAttackArr[q].isTouching(alien14) && alienKeeper2=== 1){
    alien14Counter -= 2
    goldenAttackArr.splice(q)
  }
}
for(var y =0; y<goldenAttackArr.length; y++){
  if(gameState === 3 && goldenAttackArr[y].isTouching(boss) && bossKeeper === 0){
   bossCounter -=2;
   goldenAttackArr.splice(y)
  }
}
}
// creating functions for the obstacles ctaegory 1
function ObstacleOne(){
  if(frameCount%140===0){
    obstacle1 = createSprite(displayWidth +100 ,Math.round(random(displayHeight/2, displayHeight-500)))
    obstacle1.addImage(obstacle1img);
    obstacle1.velocityX = -10
    obstacle1.scale= 0.25;
    obstacle1.lifetime = 1250;
    obstacle1Group.add(obstacle1);
  }
}

// creating functions for the obstacles ctaegory 2
function ObstacleTwo(){
  if(frameCount%160===0){
    obstacle2 = createSprite(displayWidth+100 ,Math.round(random(displayHeight/2, displayHeight-400)))
    obstacle2.addImage(obstacle2img);
    obstacle2.velocityX = -10
    obstacle2.scale= 0.25;
    obstacle2.lifetime = 1250;
    obstacle2Group.add(obstacle2);
  }
}

// creating functions for the obstacles ctaegory 3
function ObstacleThree(){
  if(frameCount%180===0){
    obstacle3 = createSprite(displayWidth+100 ,Math.round(random(displayHeight/2, displayHeight- 300)))
    obstacle3.addImage(obstacle3img);
    obstacle3.velocityX = -10
    obstacle3.scale= 0.25;
    obstacle3.lifetime = 1250;
    obstacle3Group.add(obstacle3);
  }
}
// creating function for shield booster surrounded by a bubble
function Shield(){
  var randS = Math.round(random(displayWidth/2 - 250, displayWidth/2 +250))
  if(frameCount%1000===0){
    
    bubbleS = createSprite(randS, - 100);
    bubbleS.addImage(bubbleImg);
    bubbleS.scale = 0.3;
    bubbleS.velocityY = 7.5;
    bubbleS.lifetime = 700;
    bubbleGroupS.add(bubbleS);

    shield = createSprite(randS,  - 100);
    shield.addImage(shieldImg);
    shield.scale = 0.25;
    shield.velocityY = 7.5;
    shield.lifetime = 700;
    sheildGroup.add(shield);
    
   
  }
}
// creating function for heart booster surrounded by a bubble
function Heart(){
  var randS = Math.round(random(displayWidth/2 - 250, displayWidth/2 +250))
  if(frameCount%1500===0){
    
    bubbleH = createSprite(randS, - 100);
    bubbleH.addImage(bubbleImg);
    bubbleH.scale = 0.3;
    bubbleH.velocityY = 7.5;
    bubbleH.lifetime = 700;
    bubbleGroupH.add(bubbleH);
    
    heart = createSprite(randS,  - 100);
    heart.addImage(heartImg);
    heart.scale = 0.45;
    heart.velocityY = 7.5;
    heart.lifetime = 700;
    heartGroup.add(heart);
    
    
  }
}
// creating function for fuel booster surrounded by a bubble
function Fuel(){
  var randS = Math.round(random(displayWidth/2 - 250, displayWidth/2 +250))
  if(frameCount%400===0){
    
    bubbleF = createSprite(randS, - 100);
    bubbleF.addImage(bubbleImg);
    bubbleF.scale = 0.3;
    bubbleF.velocityY = 7.5;
    bubbleF.lifetime = 700;
    bubbleGroupF.add(bubbleF);
    
    fuel = createSprite(randS,  - 100);
    fuel.addImage(fuelImg);
    fuel.scale = 0.1;
    fuel.velocityY = 7.5;
    fuel.lifetime = 700;
    fuelGroup.add(fuel);
    
    
  }
}

function AlienAttack(sprite, group, counter){
if(counter !== 0){
  if(frameCount%50 === 0){
    alienAttack = createSprite(sprite.x, sprite.y)
    alienAttack.addImage(alienattackImg)
    alienAttack.scale = 0.1
    alienAttack.velocityY = 10
    group.add(alienAttack)
  }
  if(spaceShuttleShield !== undefined){
    if(group.isTouching(spaceShuttleShield)){
      group.destroyEach()
    }
  }
  if(group.isTouching(spaceShuttle)){
    group.destroyEach()
    life --
  }
}
}

function BossAttack(){
  if(keyDown("q")){
    life += 5
    fuelCount += 10
  }
  if(bossCounter!== 0){
    if(frameCount%75 === 0){
      bossAttack = createSprite(boss.x, boss.y)
      bossAttack.addImage(bossAttackImg)
      bossAttack.scale = 0.25
      bossAttack.velocityY = 10
      bossGoldenAttackGroup.add(bossAttack)
    }
    if(spaceShuttleShield !== undefined){
      if(bossGoldenAttackGroup.isTouching(spaceShuttleShield)){
        bossGoldenAttackGroup.destroyEach()
      }
    }
    if(bossGoldenAttackGroup.isTouching(spaceShuttle)){
      bossGoldenAttackGroup.destroyEach()
      life -= 2
    }
  }
}

// creating the attack
function Attack(){
  if(keyDown("a")&& fuelCount > 0){
    attackArr.push(createSprite(spaceShuttle.x, spaceShuttle.y))
    for(var i = 0; i < attackArr.length; i ++){
      attackArr[i].addImage(attackImg);
      attackArr[i].scale = 0.1
      attackArr[i].velocityY = -15
    }
    fuelCount -= 1
  }
  for(var k =0; k<attackArr.length; k ++){
    if(attackArr[k].isTouching(obstacle1Group)){
      obstacle1Group.destroyEach()
      attackArr.splice(k)
    }
  }
  for(var a =0; a<attackArr.length; a ++){
    if(attackArr[a].isTouching(obstacle2Group)){
      obstacle2Group.destroyEach()
      attackArr.splice(a)
    }
  }
  for(var o =0; o<attackArr.length; o ++){
    if(attackArr[o].isTouching(obstacle3Group)){
      obstacle3Group.destroyEach()
      attackArr.splice(o)
    }
  }
 if(gameState === 1){
   if(alienKeeper1 === 0){

   
  for(var j = 0; j<attackArr.length; j++){
    if(attackArr[j].isTouching(alien2)){
      alien2Counter -=1
    }
  }
  for(var e =0; e<attackArr.length; e++){
    if(attackArr[e].isTouching(alien1)){
      alien1Counter -=1 
    }
  }
}
if(alienKeeper1 === 1){
  for(var f = 0; f<attackArr.length; f++){
    if(attackArr[f].isTouching(alien3)){
      alien3Counter -= 1
    }
  }
  for(var g = 0; g<attackArr.length; g++){
    if(attackArr[g].isTouching(alien4)){
      alien4Counter -=1
    }
  
} 
}
 }
 for(var m =0; m<attackArr.length; m++){
  if( gameState === 2 && attackArr[m].isTouching(alien11) && alienKeeper2=== 0){
    alien11Counter -= 1
    attackArr.splice(m)
  }
}
for(var n =0; n<attackArr.length; n++){
  if(gameState === 2 && attackArr[n].isTouching(alien12)&& alienKeeper2=== 0){
    alien12Counter -= 1
    attackArr.splice(n)
  }
}
for(var p =0; p<attackArr.length; p++){
if(gameState === 2 && attackArr[p].isTouching(alien13) && alienKeeper2=== 1){
  alien13Counter -= 1
  attackArr.splice(p)
}
}
for(var q =0; q<attackArr.length; q++){
if(gameState === 2 && attackArr[q].isTouching(alien14) && alienKeeper2=== 1){
  alien14Counter -= 1
  attackArr.splice(q)
}
}
for(var y =0; y<attackArr.length; y++){
if(gameState === 3 && attackArr[y].isTouching(boss)&& bossKeeper === 0){
  bossCounter -= 1
  attackArr.splice(y)
}
}
}

function BOSS(){
  if(gameState === 3){
    if(bossKeeper === 0){

      boss.visible = true
      AlienAttack(boss, bossAttackGroup, bossCounter)
      BossAttack()

     if(bossCounter < 0){
      boss.visible = false 
      bossKeeper = 1
     }
  }
  if(bossKeeper === 1){
    gameState = "W"
    console.log(123456)
  }
}
}
function reset(){
  spaceShuttle.y = displayHeight/2 + 200
  spaceShuttle.x = displayWidth/2
 alienKeeper1 = 0;
   alien1Counter = 3;
 alien2Counter = 3;
 alien3Counter = 3;
 alien4Counter = 3;
alienKeeper2 = 0;
alien11Counter = 4;
alien12Counter = 4;
alien13Counter = 4;
alien14Counter = 4; 
bossCounter = 20;
bossKeeper = 0
 attackArr = []
goldenAttackArr = [] 
 life = 5
 fuelCount = 10
time= 0
score = 0
}
function nothing(){
  fuelGroup.destroyEach()
  sheildGroup.destroyEach()
  heartGroup.destroyEach()
  bubbleGroupF.destroyEach()
  bubbleGroupH.destroyEach()
  bubbleGroupS.destroyEach()
  spaceShuttle.visible = false;
  if(spaceShuttleShield !== undefined){
    spaceShuttleShield.visible = false
  }

alien1.visible = false;
alien2.visible = false;
alien3.visible = false;
alien4.visible = false;
alien11.visible = false;
alien12.visible = false;
alien13.visible = false;
alien14.visible = false;
boss.visible = false;

alien1attackGroup.destroyEach()
alien2attackGroup.destroyEach()
alien3attackGroup.destroyEach()
alien4attackGroup.destroyEach()
alien11attackGroup.destroyEach()
alien12attackGroup.destroyEach()
alien13attackGroup.destroyEach()
alien14attackGroup.destroyEach()
bossAttackGroup.destroyEach()
bossGoldenAttackGroup.destroyEach()

obstacle1Group.destroyEach()
obstacle2Group.destroyEach()
obstacle3Group.destroyEach()

}