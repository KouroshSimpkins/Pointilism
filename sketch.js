/* jshint esversion: 6 */

let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage('assets/IMG_Spirals.png');
}

function setup() {
  createCanvas(img.width, img.height);
  frameRate(500);
  smallPoint = 1;
  largePoint = 10;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  let points = random(smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, points, points);
}
