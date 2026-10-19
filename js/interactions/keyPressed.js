
function keyPressed() {
  if (key === 'a' && inputValue.elt.style.display === 'none') {
    inputValue.show();
    inputValue.elt.focus();
    return false;
  }
  
  if (key === 'Enter') {
    answers.food = inputValue.value();

    inputValue.value('');
    inputValue.hide();

    writeAnswers(answers);
  }
}