let angle = 100

function preload(){
  villageMod = loadModel('objects/settlement.stl');
  cityMod = loadModel('objects/city.stl');
}

function setup() {
  createCanvas(800, 800, WEBGL);
  village = new City(villageMod, cityMod);
  city = new City(villageMod, cityMod)
  normalMaterial();
}

function draw() {
  background(51);

  orbitControl();

  push();
  scale(6);
  translate(0, 0);
  rotateX(radians(45));
  rotateZ(radians(270));
  city.show('city')
  pop();

  push();
  scale(6);
  translate(50, 0);
  rotateX(radians(45));
  rotateZ(radians(180));
  city.show('village')
  pop();

  angle++;
}
