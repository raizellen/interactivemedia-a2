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

  isUnderMouse() {
    return this.isActive() && collidePointRect(mouseX, mouseY, this.x, this.y, this.w, this.h);
  }

  // only one button counts as hovered when they overlap
  // buttons made later are drawn on top, so search from the end
  static topHovered() {
    return Button.all.findLast((b) => b.isUnderMouse());
  }

  isHovering() {
    return Button.topHovered() === this;
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
    cursor(Button.topHovered() ? HAND : ARROW);
  }

  // call from mousePressed(), triggers the hovered button
  // static cause not for specific instances
  static handlePress() {
    var hit = Button.topHovered();
    if (hit) {
      hit.onPress();
    }
  }
}

var startButton;
var signButton;
var namePosterButton;
var helpPosterButton;
var closeHelpButton;
var replyButton;
var submitButton;

// nothing is covering the store, so the sign, posters and packets can be clicked
function storeIsClickable() {
  return !onStartScreen && !helpOpen && !signOpen && !namePosterOpen && selectedPacket === null && !conversationActive();
}

// make buttons in the same order things are drawn, the one made last is on top
function createButtons() {
  // button on the starting screen
  startButton = new Button({
    x: 215,
    y: 445,
    w: 270,
    h: 70,
    isActive: () => onStartScreen,
    onPress: () => {
      onStartScreen = false;
    },
  });

  // store sign - opens the project details
  signButton = new Button({
    x: 70,
    y: 80,
    w: 500,
    h: 90,
    isActive: storeIsClickable,
    onPress: () => {
      signOpen = true;
    },
  });

  // name poster - opens the easter eggs
  namePosterButton = new Button({
    x: 400,
    y: 260,
    w: 95,
    h: 65,
    isActive: storeIsClickable,
    onPress: () => {
      namePosterOpen = true;
    },
  });

  // help poster - flips over to show the controls
  helpPosterButton = new Button({
    x: 400,
    y: 560,
    w: 150,
    h: 90,
    isActive: storeIsClickable,
    onPress: () => {
      helpFlipping = true;
    },
  });

  // close button on the help poster
  closeHelpButton = new Button({
    x: 595,
    y: 120,
    w: 50,
    h: 50,
    isActive: () => !onStartScreen && helpOpen,
    onPress: () => {
      helpOpen = false;
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