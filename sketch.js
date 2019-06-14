let enter;
let pismo;
let angle = 0;
let speed;
let rozmiar;
let przerwy;
let napis;


function setup() {

  createSpan('szybkość obrotu');
  speed = createSlider (0, 1, 0.1, 0.05);

  let canvas = createCanvas(600, 500, WEBGL);

 createSpan('rozmiar tekstu');
  rozmiar = createSlider (16, 128, 64, 8);
  createSpan('interlinia');
  przerwy = createSlider (16, 128, 64, 8);
  createSpan('treść napisu');
  napis = createInput ("tekst");

  canvas.mousePressed(restart);

  em = rozmiar.value();
  pismo = createGraphics (em, height);

  function restart() {
    punkty = rozmiar.value();
    interlinia = przerwy.value();
    tekst = napis.value();
    tekstZnaki = split (tekst, "");
    tekstZeSpacjami = join (tekstZnaki, " ");
    pismo = createGraphics (em, height);
    pismo.fill (255);
    pismo.textAlign(CENTER, CENTER);
    pismo.textSize (punkty);
    pismo.textLeading(interlinia);
    pismo.text (tekstZeSpacjami, punkty/3, 0, em-20, height);
}

}

function draw() {
  background(0);
  ambientLight (255);

  rotateY (angle);
  texture (pismo);
  plane (em,height);
  angle += speed.value();

}
