/* jshint esversion: 6 */
/* AHHH THIS ENTIRE TIME I'VE BEEN SPELLING POINTILLISM WRONG */

let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage('assets/IMG_Spirals.png');
}

function setup() {
  createCanvas(img.width, img.height); //this creates a canvas with the same dimensions as the original image
  frameRate(144); //change the framerate here if you want to try and speed up or slowdown the rate that the Pointillism is done
  smallPoint = 1;
  largePoint = 10;
  imageMode(CENTER);
  noStroke(); //We don't want any pesky outlines around our circles do we?
  background(255); //Plain background, simple.
  img.loadPixels(); //We don't want do display the image itself, we want the colour of the pixels, so we need to prepare them.
}

function draw() {
  // basically runs through to get a random pixel and then draw an ellipse from that point.
  let points = random(smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y); //get the value of the pixel at a specific x y coord in the original image.
  fill(pix, 128);
  ellipse(x, y, points, points);
}
