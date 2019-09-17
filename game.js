var score = 0;

postToPage(score); // Print to the page

createButton('-', btnPress2);
createButton('+', btnPress); // Make a button
changeTitle('Clicker Game');



function btnPress() {
  score++;
  postToPage(score);
}

function btnPress2() {
  score--;
  postToPage(score);
}
