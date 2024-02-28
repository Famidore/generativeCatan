let tiles = [];
const tilesLength = 15;
const tileSideLen = 150;

let word;

function preload() {
  villageMod = loadModel('http://' + ipAddr + ':5000/static/js/objects/simpleVillage.obj', successCallback = console.log('Successfully loaded a village model'));
  cityMod = loadModel('http://' + ipAddr + ':5000/static/js/objects/simpleCity.obj', successCallback = console.log('Successfully loaded a city model'));
  hexMod = loadModel('http://' + ipAddr + ':5000/static/js/objects/simpleHex.obj', successCallback = console.log('Successfully loaded a hex model'));
  srcData = loadJSON('http://' + ipAddr + ':5000/static/transmit/passTemplate.json', successCallback = console.log('Successfully loaded json data'));
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  village = new City(villageMod, cityMod, scaleValue = 0.1);
  city = new City(villageMod, cityMod, scaleValue = 0.1);

  for (element in srcData) {
    tiles.push(new Hex(srcData[element].position[0] * 100, 0, srcData[element].position[1] * 100, hexMod, 0.13, srcData[element].type, srcData[element].number));
  }
}

function draw() {
  orbitControl();

  background(69);
  rotateX(radians(340));

  city.show('City');
  city.show('Village');
  for (tile of tiles) {
    tile.show();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
