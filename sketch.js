let yStart = 0;
let customFont;
let backgroundImage;

function preload() {
  backgroundImage = loadImage("IMG_0696.JPG");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Arial");
  textAlign(CENTER, CENTER);
  textSize(10);
}

function draw() {
  background(backgroundImage);
  const numLines = 16;
  const spacing = 50;
  const startXLeft = width / 2 - ((numLines - 1) / 2) * spacing;
  const startXRight = width / 2 + ((numLines - 1) / 2) * spacing;

  for (let i = 0; i < numLines; i++) {
    let x = startXLeft + i * spacing;
    for (let y = yStart + 40; y < height; y += 40) {
      let yOffset = sin((y + yStart) / 3 + (i * PI) / 5) * 30;
      fill("white");
      text(hour() + ":" + minute() + ":" + second(), x, y + yOffset);
    }
  }

  for (let i = 0; i < numLines; i++) {
    let x = startXRight - i * spacing;
    for (let y = yStart + 40; y < height; y += 40) {
      let yOffset = sin((y + yStart) / 40 + (i * PI) / 3) * 80;
      fill("white");
      text(hour() + ":" + minute() + ":" + second(), x, y + yOffset);
    }
  }

  yStart--;
  if (yStart < -40) {
    yStart = 0;
  }
}
