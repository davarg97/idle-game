let score = 0; // Create a variable to store the score in
let button2 = new Button('+ 2x', btnPress3);
button2.hide()
let button3 = new Button('+ 2x', btnPress4);
button3.hide()

var title = new Title('Troll'); // Create a title element
var button = new Button('+', btnPress);   // Create a button element
var button1 = new Button('-', btnPress2);
//var button = new Button('+ 2x',btnPress3);
//button.hide()
var scr = new Text(score);                    // Create a text element


function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 20) {
    button2.show();
    if(score > 30) {
      button3.show();
  }
}

function btnPress2() {
  score--;
  scr.edit(score);
  if(score > 20) {
    button2.show();
    if(score > 30) {
      button3.show();
  }
}

function btnPress3() {
  score = 0;
  scr.edit(score);
  button2.hide()
}

function btnPress4() {
score++;