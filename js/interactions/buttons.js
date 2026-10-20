class Button {
  static all = []; // all buttons - static cause it belongs to class itself not a specific instance

  constructor({ x, y, w, h, isActive = () => true, onPress = () => {} }) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isActive = isActive;
    this.onPress = onPress;

    Button.all.push(this);
  }

  isHovering() {
    return this.isActive() && collidePointRect(mouseX, mouseY, this.x, this.y, this.w, this.h);
  }

  // current scale: enlarged on hover, 1 otherwise.
  get scaleAmount() {
    return this.isHovering() ? 1.1 : 1;
  }

  applyHover() {
    // get centre
    var cx = this.x + this.w / 2;
    var cy = this.y + this.h / 2;
    translate(cx, cy);
    scale(this.scaleAmount);
    translate(-cx, -cy);
  }

  // call from draw() once per frame, hand cursor if a button is hovered
  // static cause not for specific instances
  static updateCursor() {
    cursor(Button.all.some((b) => b.isHovering()) ? HAND : ARROW);
  }

  // call from mousePressed(), triggers the first hovered button
  // static cause not for specific instances
  static handlePress() {
    var hit = Button.all.find((b) => b.isHovering());
    if (hit) {
      hit.onPress();
    }
  }
}

var startButton;
var signButton;
var helpButton;
var closeHelpButton;
var replyButton;
var submitButton;

function createButtons() {
  // button on the starting screen
  startButton = new Button({
    x: 215,
    y: 445,
    w: 270,
    h: 70,
    isActive: () => starting,
    onPress: () => {
      starting = false;
    },
  });

  // store sign - opens the project details
  signButton = new Button({
    x: 70,
    y: 80,
    w: 500,
    h: 90,
    isActive: () => !starting && !posterBack && !signOpen && selectedPacket === null && !conversationActive(),
    onPress: () => {
      signOpen = true;
    },
  });

  // help poster
  helpButton = new Button({
    x: 400,
    y: 560,
    w: 150,
    h: 90,
    isActive: () => !starting && !posterBack && !signOpen && selectedPacket === null && !conversationActive(),
    onPress: () => {
      // can't start a second flip while one is running
      if (!posterFlipping) {
        posterFlipping = true;
      }
    },
  });

  // close button on the help poster
  closeHelpButton = new Button({
    x: 595,
    y: 120,
    w: 50,
    h: 50,
    isActive: () => !starting && posterBack,
    onPress: () => {
      posterBack = false;
    },
  });

  // player's reply in the conversation
  replyButton = new Button({
    x: 225,
    y: 575,
    w: 250,
    h: 54,
    isActive: () => dialoguePhase === "reply",
    onPress: () => {
      goToStep(scriptIndex + 1);
    },
  });

  // next to the input, same as pressing enter
  submitButton = new Button({
    x: 520,
    y: 500,
    w: 95,
    h: 34,
    isActive: () => dialoguePhase === "asking" && inputShown,
    onPress: () => {
      submitDataAnswer();
    },
  });
}