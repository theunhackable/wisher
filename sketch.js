// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

let font;
let vehicles = [];

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  // textFont(font);
  // textSize(192);
  // fill(255);
  // noStroke();
  // text('train', 100, 200);
  frameRate(60)
  var happy = font.textToPoints('Happy', 70, 200, 92, {
    sampleFactor: 0.5
  });

  for (var i = 0; i < happy.length; i++) {
    var pt = happy[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
  var happy = font.textToPoints('Birthday', 20, 300, 92, {
    sampleFactor: 0.5
  });

  for (var i = 0; i < happy.length; i++) {
    var pt = happy[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
  var happy = font.textToPoints('Mowa', 90, 400, 92, {
    sampleFactor: 0.5
  });

  for (var i = 0; i < happy.length; i++) {
    var pt = happy[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
