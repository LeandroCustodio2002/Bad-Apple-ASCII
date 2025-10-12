const colVal = 'Ñ@#W$9876543210?!abc;:+=-,._';
let vid;
let container;

let asciiW = 120;
let asciiH = 0;

let offscreen = null;

function setup() {
  noCanvas();
  container = select('.container');

  // estilo básico para monospace consistente
  container.elt.style.fontFamily = 'monospace';
  container.elt.style.lineHeight = '0.6';
  container.elt.style.fontSize = '8px';

  vid = createVideo(['badApple.mp4']);
  vid.hide();
  vid.volume(1);

  vid.elt.addEventListener('loadedmetadata', () => {
    calcAsciiSize();
    ensureOffscreen();
    vid.loop();
    vid.play();
  });

  // recalcula quando a janela muda (resize/zoom geralmente dispara)
  window.addEventListener('resize', () => {
    const prevH = asciiH;
    calcAsciiSize();
    if (asciiH !== prevH) ensureOffscreen();
  });

  const btn = createButton("▶ Play Bad Apple");
  btn.mousePressed(() => {
    if (!asciiH) {
      calcAsciiSize();
      ensureOffscreen();
    }
    vid.loop();
    vid.play();
    btn.hide();
  });
}

function calcAsciiSize() {
  const vW = vid.elt.videoWidth || 1;
  const vH = vid.elt.videoHeight || 1;
  const aspect = vH / vW;
  asciiH = floor(asciiW * aspect * 0.75);
  if (asciiH < 2) asciiH = 2;
}

function ensureOffscreen() {
  // recria offscreen apenas quando o tamanho em chars mudou
  if (!offscreen || offscreen.width !== asciiW || offscreen.height !== asciiH) {
    offscreen = createGraphics(asciiW, asciiH);
    // FORÇA 1 para evitar problemas com zoom/DPR
    offscreen.pixelDensity(1);
  }
}

function draw() {
  if (!vid || !asciiH || !offscreen) return;

  offscreen.push();
  offscreen.clear();
  // desenha o vídeo reduzido no offscreen
  offscreen.image(vid, 0, 0, asciiW, asciiH);
  offscreen.pop();

  offscreen.loadPixels();

  let asciiFrame = '';
  for (let y = 0; y < asciiH; y++) {
    let row = '';
    for (let x = 0; x < asciiW; x++) {
      const idx = 4 * (x + y * asciiW);
      const r = offscreen.pixels[idx];
      const g = offscreen.pixels[idx + 1];
      const b = offscreen.pixels[idx + 2];

      const brightness = (r + g + b) / 3;
      const charIndex = floor(map(brightness, 0, 255, colVal.length - 1, 0, true));
      const c = colVal.charAt(charIndex);

      row += `<span style="color: rgb(${r},${g},${b})">${c}</span>`;
    }
    asciiFrame += row + '<br>';
  }

  container.html(asciiFrame);
}
