var answers = {};
var inputValue; // the answer box
var currentQuestion = 0;
var submitting = false;

async function readAnswers() {
  const response = await fetch('/answers');
  answers = await response.json();
}

async function writeAnswers() {
  const response = await fetch('/answers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(answers)
  });
  if (!response.ok) {
    throw new Error(`Saving answers failed: ${response.status}`);
  }
}

function createInputField() {
  inputValue = createInput();
  inputValue.addClass('tindera-input'); // styling in style.css
  inputValue.position(85, 500); // sits inside the dialogue box
  inputValue.attribute('type', 'number'); // automatically adds up down arrows (stepper) in chrome, safari and edge
  inputValue.attribute('min', '0');
  inputValue.attribute('placeholder', 'type a number, then press Enter');
  inputValue.input(() => {
    inputNotice = ""; // clear warning when start typing
  });
  inputValue.elt.addEventListener('keydown', (event) => { // html element so need event listener
    if (event.key === 'Enter') {
      event.preventDefault();
      submitDataAnswer();
    }
  });
  inputValue.hide();
}

async function submitDataAnswer() {
  if (dialoguePhase !== "asking" || !inputShown || submitting) return;
  if (currentQuestion >= dataQuestions.length) return;

  var value = inputValue.value();

  if (value.trim() === '') {
    inputNotice = "Please enter a number.";
    return;
  }

  var number = Number(value);
  var question = dataQuestions[currentQuestion];

  if (!Number.isFinite(number) || number < 0) {
    inputNotice = "Please enter a valid number.";
    return;
  }

  if (question.key === "language" && number > 100) {
    inputNotice = "Please enter a percentage between 0 and 100.";
    return;
  }

  answers[question.key] = number;

  submitting = true;
  try {
    await writeAnswers();

    currentQuestion++;

    if (currentQuestion < dataQuestions.length) {
      beginQuestion();
    } else {
      finishQuestions();
    }
  } catch (error) {
    console.error('Unable to save dialogue answer:', error);
    inputNotice = "Could not save your answer. Please try again.";
  } finally {
    submitting = false;
  }
}