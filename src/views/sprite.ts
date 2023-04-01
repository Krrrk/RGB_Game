import * as PIXI from 'pixi.js'

export { renderSprite, updateSprite };

const char1Texture = PIXI.Texture.from('../assets/images/the_knight/Idle (1).png');
let char1Velocity = { x: 0, y: 0};
const char1Sprite = new PIXI.Sprite(char1Texture);
let grounded = true;

let jumpStartY = 0;
let jumpTime = 0;
const jumpHeight = 200;
const jumpDuration = 30;

function renderSprite(app) {
	app.stage.addChild(char1Sprite);

	char1Sprite.width = 200;
	char1Sprite.height = 200;
	char1Sprite.position.set(app.screen.width / 8, app.screen.height / 1.31);
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
			if (grounded === true) {
				grounded = false;
				jumpStartY = char1Sprite.position.y;
				jumpTime = 0;
			}
	})

	document.addEventListener('keyup', function (e) {
		  if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'ArrowLeft' || e.key === 'a') char1Velocity.x = 0;
		  if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'ArrowDown' || e.key === 's') console.log('nothing');
	});
}

function parabolicJump(time, jumpHeight, jumpDuration) {
	const g = (4 * jumpHeight) / Math.pow(jumpDuration, 2);
	const v0 = Math.sqrt(2 * g * jumpHeight);
	const y = v0 * time - 0.5 * g * Math.pow(time, 2);
	return y;
}

function updateSprite(app, delta) {
	if (char1Velocity.x > 5)
		char1Velocity.x = 5;
	if (char1Velocity.x < -5)
		char1Velocity.x = -5;
	if (char1Velocity.y != 0)
		console.log(char1Velocity.y);
	if (!grounded) {
		char1Velocity.y = char1Velocity.y / 1.05;
	}

	if (!grounded) {
		jumpTime += delta;
		char1Sprite.y = jumpStartY - parabolicJump(jumpTime, jumpHeight, jumpDuration);

		if (char1Sprite.y >= app.screen.height / 1.31) {
			grounded = true;
			char1Sprite.y = app.screen.height / 1.31;
		}
	}
	char1Sprite.x += char1Velocity.x * delta;
	char1Sprite.y += char1Velocity.y * delta;

	if (char1Velocity.x < 0)
		char1Sprite.scale.x = -Math.abs(char1Sprite.scale.x);
	if (char1Velocity.x > 0)
		char1Sprite.scale.x = Math.abs(char1Sprite.scale.x);
}

