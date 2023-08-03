let text2 = "Please, enter your shortcut above!";
let selectedEnvironment = "vsc";
let canvas;
let backgroundImage;
let img;

preload();
setup();

function preload() {
  // Load the images based on the selected environment | not used for the moment.
  switch (selectedEnvironment) {
    case "vsc":
      img = loadImage("vsc-logo.png");
      break;
    case "bash":
      img = loadImage("bash-logo.png");
      break;
    case "discord":
      img = loadImage("discord-logo.png");
      break;
    default:
      img = loadImage("vsc-logo.png");
      break;
  }

  backgroundImage = loadImage("dark-background.png");
}

function setup() {
  canvas = createCanvas(600, 400);
  canvas.parent("sketch");
  background("black");

  textSize(30);
  textAlign(CENTER, CENTER);
  fill("white");

  image(backgroundImage, 0, 0, width, height);

  push();
  textStyle(BOLD);
  const text1 = "Welcome to the Hotkey Designer App";
  text(text1, width / 2, height / 2 - 20);
  pop();

  text(text2, width / 2, height / 2 + 45);
}

function updateCanvas() {
  const customText = document.getElementById("custom-text-input").value;

  text2 = customText;

  clear();
  image(backgroundImage, 0, 0, width, height);
  textSize(45);
  textAlign(CENTER, CENTER);
  fill("white");
  const text1 = "Shortcut of the day:";
  text(text1, width / 2 + 40, height / 2 - 80);

  push();
  textSize(80);
  textStyle(BOLD);
  text(text2, width / 2, height / 2 + 35);
  pop();

  const imgX = 20;
  const imgY = 55;
  image(img, imgX, imgY, 120, 120);
}

function downloadCanvas() {
  const canvasElement = document.getElementById("defaultCanvas0");
  const dataURL = canvasElement.toDataURL();
  const downloadLink = document.getElementById("download-button");
  downloadLink.href = dataURL;
}
