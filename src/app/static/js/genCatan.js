let tiles = [];
const tilesLength = 15;
const tileSideLen = 150;
// temp
const hexPos = [[0, 0], [1.0, 0.0], [0.5, 0.866], [-0.5, 0.866], [-1.0, 0.0], [-0.5, -0.866], [0.5, -0.866], [1.5, 0.866], [2.5, 0.866], [2.0, 1.732], [1.0, 1.732], [2.0, 0.0], [0.0, 1.732], [0.5, 2.598], [-0.5, 2.598], [-1.0, 1.732], [-1.5, 0.866], [-2.0, 1.732], [-2.5, 0.866], [-2.0, 0.0], [-1.5, -0.866], [-2.5, -0.866]]


function preload() {
  villageMod = loadModel('http://' + ipAddr + ':5000/static/js/objects/simpleVillage.obj', successCallback = console.log('Successfully loaded a village model'));
  cityMod = loadModel('http://' + ipAddr + ':5000/static/js/objects/simpleCity.obj', successCallback = console.log('Successfully loaded a city model'));
  hexMod = loadModel('http://' + ipAddr + ':5000/static/js/objects/simpleHex.obj', successCallback = console.log('Successfully loaded a hex model'));
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  village = new City(villageMod, cityMod, scaleValue = 0.05);
  city = new City(villageMod, cityMod, scaleValue = 0.05);

  for (hp of hexPos) {
    tiles.push(new Hex(hp[0] * 75, 5, hp[1] * 75, hexMod, 0.1))

  }
}

function draw() {
  orbitControl();

  background(69);
  rotateX(radians(340));

  city.show('city')
  city.show('village')
  for (tile of tiles) {
    tile.show();
  }
  // box(100, 100);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
