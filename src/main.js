const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,
});
document.body.appendChild(app.view);

app.ticker.add((delta) => {
  // Game loop logic here
});

PIXI.Loader.shared.add('character', 'assets/images/character.png').load(() => {
  const character = new PIXI.Sprite(PIXI.Loader.shared.resources.character.texture);
  character.anchor.set(0.5);
  character.x = app.view.width / 2;
  character.y = app.view.height / 2;
  app.stage.addChild(character);
});

const keys = {};

document.addEventListener('keydown', (e) => {
  keys[e.code] = true;
});

document.addEventListener('keyup', (e) => {
  keys[e.code] = false;
});

const speed = 5;

app.ticker.add((delta) => {
  if (keys['ArrowUp']) {
    character.y -= speed * delta;
  }
  if (keys['ArrowDown']) {
    character.y += speed * delta;
  }
  if (keys['ArrowLeft']) {
    character.x -= speed * delta;
  }
  if (keys['ArrowRight']) {
    character.x += speed * delta;
  }
});

