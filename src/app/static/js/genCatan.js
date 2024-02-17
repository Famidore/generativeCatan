let tiles = [];
const tilesLength = 15;
const tileSideLen = 150;

// function preload() {
//   villageMod = loadModel('objects/simpleVillage.obj');
//   cityMod = loadModel('objects/simpleCity.obj');
//   hexMod = loadModel('objects/simpleHex.obj');
//   fontModel = loadFont('assets/genFont.otf')
// }

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // textFont(fontModel);

  // village = new City(villageMod, cityMod, scaleValue = 0.1);
  // city = new City(villageMod, cityMod, scaleValue = 0.1);

  // for (let i = -tilesLength; i < tilesLength; i++) {
  //   for (let j = -tilesLength; j < tilesLength; j++) {
  //     tiles.push(new Hex(i * tileSideLen, 5, j * (tileSideLen - 10), hexMod, 0.2))
  //   }
  // }
}

function draw() {
  orbitControl();

  background(69);
  rotateX(radians(340));

  // city.show('city')
  // city.show('village')
  // for (tile of tiles) {
  //   tile.show();
  // }
  box(100,100);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} 
 