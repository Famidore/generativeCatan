let tiles = [];
const tilesLength = 15;
const tileSideLen = 150;


function preload() {
  villageMod = loadModel('http://localhost:5000/static/js/objects/simpleVillage.obj', successCallback = console.log('Successfully loaded a village model'));
  cityMod = loadModel('http://localhost:5000/static/js/objects/simpleCity.obj', successCallback = console.log('Successfully loaded a city model'));
  hexMod = loadModel('http://localhost:5000/static/js/objects/simpleHex.obj', successCallback = console.log('Successfully loaded a hex model'));
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  village = new City(villageMod, cityMod, scaleValue = 0.1);
  city = new City(villageMod, cityMod, scaleValue = 0.1);

  for (let i = -tilesLength; i < tilesLength; i++) {
    for (let j = -tilesLength; j < tilesLength; j++) {
      tiles.push(new Hex(i * tileSideLen, 5, j * (tileSideLen - 10), hexMod, 0.2))
    }
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
