var script = [
  { who: "tindera", text: "Good morning!" },
  { who: "player", text: "Magandang umaga po!", translation: "Good morning!" },
  { who: "tindera", text: "Aba, marunong ka palang mag-Tagalog!", translation: "Oh, you know how to speak Tagalog!" },
  { who: "player", text: "Haha opo.", translation: "Yes haha." },
  { who: "tindera", text: "Bagong suki ka yata. I have a few questions, ha?", translation: "You must be a new regular, I have a few questions for you, okay?" },
  { who: "player", text: "Sige po!", translation: "Sure!" },
  { who: "questions" },
  { who: "tindera", text: "Thanks!" },
  { who: "player", text: "Walang anuman po!", translation: "You're welcome!" },
  { who: "tindera", text: "Take a closer look. Click on any packet!" },
];

const typeSpeed = 0.8; // characters typed per frame

// dialogue state
var dialoguePhase = "idle"; // idle, talking, reply, asking, done
var dialogueTranslation = "";
var scriptIndex = 0; // position in the script
var dialogueText = "";
var charsShown = 0; // typewriter progress
var inputNotice = ""; // warning shown in the box
var inputShown = false;

function conversationActive() {
  return (dialoguePhase === "talking" || dialoguePhase === "reply" || dialoguePhase === "asking");
}

function typingDone() {
  return charsShown >= dialogueText.length;
}

// call once per frame
function updateDialogue() {
  if (dialoguePhase === "idle" && closing === 0 && tinderaAtWindow()) {
    goToStep(0);
  }

  if (dialoguePhase === "talking" || dialoguePhase === "asking") {
    charsShown = min(charsShown + typeSpeed, dialogueText.length);
  }

  if (dialoguePhase === "talking" && typingDone()) {
    var next = script[scriptIndex + 1];
    if (next && next.who !== "tindera") {
      goToStep(scriptIndex + 1);
    }
  }

  if (dialoguePhase === "asking" && typingDone() && !inputShown) {
    showInput();
  }
}

function goToStep(i) {
  scriptIndex = i;
  var step = script[i];

  if (!step) {
    endConversation();
  } else if (step.who === "tindera") {
    dialoguePhase = "talking";
    dialogueText = step.text;
    dialogueTranslation = step.translation || "";
    charsShown = 0;
  } else if (step.who === "player") {
    dialoguePhase = "reply"; // the box keeps her last line
  } else if (step.who === "questions") {
    currentQuestion = 0;
    beginQuestion();
  }
}

function beginQuestion() {
  dialoguePhase = "asking";
  dialogueTranslation = "";
  dialogueText = dataQuestions[currentQuestion].question;
  charsShown = 0;
  inputNotice = "";
  hideInput();
  inputValue.value("");
}

function finishQuestions() {
  hideInput();
  goToStep(scriptIndex + 1);
}

function endConversation() {
  dialoguePhase = "done";
  dialogueText = "";
  hideInput();
}

function replayQuestions() {
  if (dialoguePhase !== "done" || closing !== 0 || !tinderaAtWindow()) {
    return;
  }

  goToStep(script.findIndex((step) => step.who === "questions"));
}

function showInput() {
  inputValue.show();
  inputValue.elt.focus();
  inputShown = true;
}

function hideInput() {
  inputValue.hide();
  inputShown = false;
}

function clickDialogue() {
  // still typing - first click reveals the whole line
  if (!typingDone() && (dialoguePhase === "talking" || dialoguePhase === "asking")) {
    charsShown = dialogueText.length;
    return;
  }

  if (dialoguePhase === "talking") { // final dialogue
    goToStep(scriptIndex + 1);
    return;
  }

  Button.handlePress(); // reply and ok buttons
}