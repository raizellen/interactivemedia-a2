var answers = {};

async function readAnswers() {
  const response = await fetch('/answers');
  answers = await response.json();
}

async function writeAnswers() {
  await fetch('/answers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(answers)
  });
}

function createInputField() {
  inputValue = createInput();
  inputValue.position(0, 700);
  inputValue.style('width', '700px');
  inputValue.hide();
}

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