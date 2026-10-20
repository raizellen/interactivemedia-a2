// starter
var starting = true;
var outsideBuffer;
var insideBuffer;

// sounds
var karaoke;
var sweeping;
var rooster;
var kidsPlaying;

// packets
var packetWidth = 50;
var packetHeight = 80;
var verticalShadowWidth = 8;
var horizontalShadowHeight = 8;
var packets = [];
var selectedPacket = null;

// help poster
var posterFlipping = false;
var posterBack = false;
var posterFlip = 0;

// sign details
var signOpen = false;

// shutter
var closing = 129;
var shutterDirection = "closing"; // "opening" or "closing", set by the mouse wheel

// tindera
const tinderaAwayX = -10; // hidden behind the left post
const tinderaWindowX = 350; // middle of the window
var tinderaX = tinderaAwayX;
var tinderaMoving = false;

// dialogue
var dialoguePhase = "idle"; // idle, talking, reply, asking, done
var dialogueTranslation = "";
var scriptIndex = 0; // position in the script
var dialogueText = "";
var charsShown = 0; // typewriter progress
var inputNotice = ""; // warning shown in the box
var inputShown = false;