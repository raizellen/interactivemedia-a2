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
var closing = 129;
var shutterDirection = "closing"; // "opening" or "closing", set by the mouse wheel