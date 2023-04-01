import * as PIXI from 'pixi.js';

export { createIdleAnimation, createRunAnimation, createJumpAnimation };

function createIdleAnimation() {
	const idleTextures = [];
	for (let i = 1; i <= 10; i++) {
		const texture = PIXI.Texture.from(`../assets/images/the_knight/Idle (${i}).png`);
		idleTextures.push(texture);
	}
	const idleSprite = new PIXI.AnimatedSprite(idleTextures);
	idleSprite.animationSpeed = 0.25;
	return idleSprite;
}

function createRunAnimation() {
	const runTextures = [];
	for (let i = 1; i <= 10; i++) {
		const texture = PIXI.Texture.from(`../assets/images/the_knight/Run (${i}).png`);
		runTextures.push(texture);
	}
	const runSprite = new PIXI.AnimatedSprite(runTextures);
	runSprite.animationSpeed = 0.25;
	return runSprite;
}

function createJumpAnimation() {
	const jumpTextures = [];
	for (let i = 1; i <= 10; i++) {
		const texture = PIXI.Texture.from(`../assets/images/the_knight/Jump (${i}).png`);
		jumpTextures.push(texture);
	}
	const jumpSprite = new PIXI.AnimatedSprite(jumpTextures);
	jumpSprite.animationSpeed = 0.25;
	return jumpSprite;
}

