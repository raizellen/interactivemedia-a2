var answers = {};
var currentQuestion = 0;

var dataQuestions = [
  {
    key: "food",
    max: 21,
    question: "How many times a week do you eat Filipino food?"
  },
  {
    key: "travel",
    max: 12,
    question: "How many trips to Filipino-related places per year?"
  },
  {
    key: "music",
    max: 20,
    question: "How many hours of Filipino music or karaoke per week?"
  },
  {
    key: "events",
    max: 12,
    question: "How many Filipino cultural events per year?"
  },
  {
    key: "language",
    max: 100,
    unit: "%", // shown after the answer on the packet card
    question: "What percentage of your conversations use Filipino or Tagalog? (0-100)"
  },
  {
    key: "movies",
    max: 12,
    question: "How many Filipino movies do you watch per month?"
  }
];

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
  inputValue.attribute('type', 'number');
  inputValue.attribute('min', '0');
  inputValue.hide();
}

function startDataCollection() {
  inputValue.value('');
  inputValue.attribute('placeholder', dataQuestions[currentQuestion].question);
  inputValue.show();
  inputValue.elt.focus();
}

async function submitDataAnswer() {
  if (currentQuestion >= dataQuestions.length) return;

  var value = inputValue.value();

  if (value.trim() === '') {
    alert("Please enter a number.");
    return;
  }

  var number = Number(value);
  var question = dataQuestions[currentQuestion];

  if (!Number.isFinite(number) || number < 0) {
    alert("Please enter a valid number.");
    return;
  }

  if (question.key === "language" && number > 100) {
    alert("Please enter a percentage between 0 and 100.");
    return;
  }

  answers[question.key] = number;

  await writeAnswers();

  currentQuestion++;
  inputValue.value('');

  if (currentQuestion < dataQuestions.length) {
    startDataCollection();
  } else {
    inputValue.hide();
    alert("All six answers have been saved!");
  }
}