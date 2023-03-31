import * as PIXI from 'pixi.js'

export { renderSprite, updateSprite };

const char1Texture = PIXI.Texture.from('../assets/images/the_knight/Idle (1).png');
const char1Velocity = { x: 0, y: 0};
const char1Sprite = new PIXI.Sprite(char1Texture);

function renderSprite(app) {
	app.stage.addChild(char1Sprite);

	char1Sprite.width = 200;
	char1Sprite.height = 200;
	char1Sprite.position.set(app.screen.width / 2, app.screen.height / 2);
	char1Sprite.anchor.set(0.5, 0.5);
	char1Sprite.interactive = true;
	char1Sprite.buttonmode = true;
	char1Sprite.on('pointerdown', function() {
		char1Sprite.scale.x += 0.1;
		char1Sprite.scale.y += 0.1;
	});

	document.addEventListener('keydown', function(e) {
	if(e.key === 'ArrowRight' || e.key === 'd')
		char1Velocity.x += 8;
	if(e.key === 'ArrowLeft' || e.key === 'a')
		char1Velocity.x -= 8;
	if(e.key === 'ArrowUp' || e.key === 'w')
		char1Velocity.y -= 8;
	if(e.key === 'ArrowDown' || e.key === 's')
		char1Velocity.y += 8;
	})

	document.addEventListener('keyup', function (e) {
		  if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'ArrowLeft' || e.key === 'a') char1Velocity.x = 0;
		  if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'ArrowDown' || e.key === 's') char1Velocity.y = 0;
	});
}

function updateSprite(app, delta) {
	if (char1Velocity.x > 5)
		char1Velocity.x = 5;
	if (char1Velocity.y > 5)
		char1Velocity.y = 5;
	if (char1Velocity.x < -5)
		char1Velocity.x = -5;
	if (char1Velocity.y < -5)
		char1Velocity.y = -5;
	char1Sprite.x += char1Velocity.x * delta;
	char1Sprite.y += char1Velocity.y * delta;

	if (char1Velocity.x < 0)
		char1Sprite.scale.x = -Math.abs(char1Sprite.scale.x);
	if (char1Velocity.x > 0)
		char1Sprite.scale.x = Math.abs(char1Sprite.scale.x);
}

