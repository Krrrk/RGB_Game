import * as PIXI from 'pixi.js';
import { createIdleAnimation, createRunAnimation, createJumpAnimation } from './animations.ts';

export { renderSprite, updateSprite };

let char1Velocity = { x: 0, y: 0 };
let grounded = true;

let jumpStartY = 0;
let jumpTime = 0;
const jumpHeight = 200;
const jumpDuration = 30;

const idleSprite = createIdleAnimation();
const runSprite = createRunAnimation();
const jumpSprite = createJumpAnimation();

let activeSprite = idleSprite;

function setActiveAnimation(animation) {
	idleSprite.visible = false;
	runSprite.visible = false;
	jumpSprite.visible = false;
	animation.visible = true;
	animation.play();
	activeSprite = animation;
}

function syncSpritePositions() {
	[idleSprite, runSprite, jumpSprite].forEach(sprite => {
		sprite.x = activeSprite.x;
		sprite.y = activeSprite.y;
		sprite.scale.x = activeSprite.scale.x;

	});
}

function renderSprite(app) {
	app.stage.addChild(idleSprite);
	app.stage.addChild(runSprite);
	app.stage.addChild(jumpSprite);

	[idleSprite, runSprite, jumpSprite].forEach(sprite => {
		sprite.width = 200;
		sprite.height = 200;
		sprite.position.set(app.screen.width / 8, app.screen.height / 1.31);
		sprite.anchor.set(0.5, 0.5);
		sprite.interactive = true;
		sprite.buttonmode = true;
	});

	idleSprite.on('pointerdown', function() {
		idleSprite.scale.x += 0.1;
		idleSprite.scale.y += 0.1;
	});

	document.addEventListener('keydown', function(e) {
		if(e.key === 'ArrowRight' || e.key === 'd')
			char1Velocity.x += 8;
		if(e.key === 'ArrowLeft' || e.key === 'a')
			char1Velocity.x -= 8;
		if(e.key === 'ArrowUp' || e.key === 'w')
			if (grounded === true) {
				grounded = false;
				jumpStartY = jumpSprite.position.y;
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
		jumpTime += delta;
		jumpSprite.y = jumpStartY - parabolicJump(jumpTime, jumpHeight, jumpDuration);

		if (jumpSprite.y >= app.screen.height / 1.31) {
			grounded = true;
			jumpSprite.y = app.screen.height / 1.31;
		}
	}

	if (!grounded) {
		setActiveAnimation(jumpSprite);
	} else if (char1Velocity.x !== 0) {
		setActiveAnimation(runSprite);
	} else {
		setActiveAnimation(idleSprite);
	}

	activeSprite.x += char1Velocity.x * delta;
	activeSprite.y += char1Velocity.y * delta;

	syncSpritePositions();

	if (char1Velocity.x < 0)
		activeSprite.scale.x = -Math.abs(activeSprite.scale.x);
	if (char1Velocity.x > 0)
		activeSprite.scale.x = Math.abs(activeSprite.scale.x);
}

