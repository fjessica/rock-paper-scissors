var userSelect = -1;
var compSelect = -2;
var rockImage;
var paperImage;
var scissorsImage;

function setup() {

  createCanvas(700,700);
    //preload();
}
function draw() {

  //background(29,202,255);
  background(0);
  //keyPressed();
  showSelections();
  evaluate();

  fill(255,0,0);
  textSize(20);
  text("Your Player",90, 490);
  text("1 = Rock", 100, 530);
  text("2 = Paper", 100,560);
  text("3 = Scissors", 100,590);

  fill(0,0, 255);
  textSize(30);
  text("Press Number Keys to Choose your Move", 80,100);

}

function preload() {
  rockImage = loadImage("images/rock.png");
  paperImage = loadImage("images/paper.png");
  scissorsImage = loadImage("images/scissors.png");
}

function keyPressed() {
  if (keyCode==49){
    userSelect = 1;
    compSelect = floor(random(1,4));
  }
  else if (keyCode==50) {
    userSelect = 2;
    compSelect = floor(random(1,4));
  }
  else if (keyCode==51) {
    userSelect = 3;
    compSelect = floor(random(1,4));
  }
}
function showSelections() {
  //preload();
  if (userSelect == 1) {
    image(rockImage, 50, 250);
  }
  else if (userSelect == 2){
    image(paperImage, 50, 250);
  }
  else if (userSelect == 3){
    image(scissorsImage, 50, 250);
  }
  if (compSelect == 1) {
    image(rockImage, 400, 250);
  }
  else if (compSelect == 2){
    image(paperImage, 400, 250);
  }
  else if (compSelect == 3){
    image(scissorsImage, 400, 250);
  }
}

function evaluate() {
  fill(255);
  if(userSelect == compSelect) {
    textSize(40,40);
    text("ISSA DRAW!!!", 200, 200);
  }
  //Check if player won
  else if( (userSelect == 1 && compSelect == 3) ||
      (userSelect == 2 && compSelect == 1) ||
      (userSelect == 3 && compSelect == 2)) {
        fill(255);
        textSize(40,40);
        text("YOU WON!", 250, 200);
      }
  else if(userSelect != -1 && compSelect != -2){
    fill(255);
    textSize(40,40);
  text("You lose", 250, 200);
 }
}
