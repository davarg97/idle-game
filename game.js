let score = 0; // Create a variable to store the score in
//let button2 = new Button('+ 2x', btnPress3);
//button2.hide()
//let button3 = new Button('+ 2x', btnPress4);
//button3.hide()

var title = new Title('Planet X42'); // Create a title element
//var button = new Button('+', btnPress);   // Create a button element
//var button1 = new Button('-', btnPress2);
var button4 = new Button('Activate Heater', addToFeed);
//var scr = new Text(score);                    // Create a text element
var section = new Section();
var text = new Text('');

section.add(text);
section.addBorder('red');
//var feed = new HTMLElement('div', "");

//function btnPress() {
  //score++;         // Increase the score
  //scr.edit(score); // Update the page with the new score
  //if(score > 20) {
    //button2.show();
    //if(score > 30) {
      //button3.show();
  //}
 //}
//}
//function btnPress2() {
  //score--;
  //scr.edit(score);
  //if(score < -20) {
    //button2.show();
    //if(score > 30) {
      //button3.show();
  //}
 //}
//}
//function btnPress3() {
  //score = 0;
  //scr.edit(score);
  //button2.hide()
//}

//function btnPress4() {
//score = score +2;
//scr.edit(score);
//}

function addToFeed(text) {
  let element = new Text('Heater Activated')
  section.add(element);
 //feed.edit (element)

 button4.style('background-color','red');
 setTimeout(blue , 6000);
}
function blue() {
  button4.style('background-color','blue');
}
