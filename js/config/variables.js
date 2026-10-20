// start screen
var onStartScreen = true;
var outsideBuffer;
var insideBuffer;

// fonts
var thickFont;
var baybayinFont;
var normalFont;

// sounds
var karaoke;
var sweeping;
var rooster;
var kidsPlaying;

// packets
var packetWidth = 50;
var packetHeight = 80;
var packetTop = 200; // y of the top packet in every stack
var packets = [];
var selectedPacket = null;

// help poster
var helpFlipping = false;
var helpOpen = false;
var helpFlip = 0;

// sign and name poster details
var signOpen = false;
var namePosterOpen = false;

// shutter
var shutterProgress = 129; // 0 = open, 130 = fully closed
var shutterDirection = "closing"; // "opening" or "closing", set by the mouse wheel