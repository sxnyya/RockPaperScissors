let computerguess;
let buttonrock;
let buttonscissors;
let buttonpaper;
let score = 0;
function setup() {
createCanvas (1200, 500);
  drawButton(); 
}
function draw() {
  //just keep running
textSize(12);
text('Add a point when you win, and Subtract when you ith the buttons!' , 428,200);
textSize (15);
text( 'Score: '+score, 520,240);
     } 
function rock( ){ 
drawButton();
  computerguess=random(['rock' , 'paper', 'scissors']);
  text('you chose rock', 455,301);
  text('computer chose ' + computerguess, 620,300 );
  if(computerguess== 'rock') { 
  text("It's a tie", 560,350);
  } else if (computerguess=='scissors') { 
  text("You win!", 560,350);
  } else {
    text("You lose", 560,350)
  }
}
function paper () { 
drawButton();
   computerguess=random(['rock' , 'paper', 'scissors']);
   text('you chose paper', 450,300);
  text('computer chose ' + computerguess, 620,300 );
  if(computerguess== 'paper') { 
  text("It's a tie", 560,350);
  } else if (computerguess=='scissors') { 
  text("You lose", 560,350);
  } else {
    text("You win", 560,350)
  }
} 

function scissors () { 
drawButton();
   computerguess=random(['rock' , 'paper', 'scissors']);
   text('you chose scissors', 450,300);
  text('computer chose ' + computerguess, 620,300 );
  if(computerguess== 'scissors') { 
  text("It's a tie", 560,350);
  } else if (computerguess=='rock') { 
  text("You lose", 560,350);
  } else {
    text("You win", 560,350)
  }
} 

function addPoints(){
  background(255,255,204
);
  if (score >= 0)
    score+=1;
}

function minusPoints(){
  background(	
51,204,255);
  if(score>= 0)
    score-=1;
}

function drawButton() { 
    background(255,102,102);
  
 buttonadd =
  createButton('AddPoint');
  buttonadd.position(600,215);
  buttonadd.mousePressed(addPoints);
  
  buttonmin =
  createButton('MinusPoint');
  buttonmin.position(600,245);
  buttonmin.mousePressed(minusPoints);

  buttonrock = createButton('Rock');
  buttonrock.position(580, 50);
  buttonrock.mousePressed(rock);

  buttonpaper = createButton('Paper');
  buttonpaper.position(577, 100);
  buttonpaper.mousePressed(paper);

  buttonscissors = createButton('Scissors');
  buttonscissors.position(573, 150);
  buttonscissors.mousePressed(scissors);

text('Rock, Paper, Scissors' , 548,20);

}
     