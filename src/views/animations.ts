import * as PIXI from 'pixi.js';

export class Animations {
	constructor() {
		this.animations = {
			idle: this.createIdleAnimation(),
			run: this.createRunAnimation(),
			jump: this.createJumpAnimation(),
			groundAttack: this.createGroundAttackAnimation(),
			airAttack: this.createAirAttackAnimation(),
		};
	}

	createIdleAnimation() {
		const idleTextures = [];
		for (let i = 1; i <= 10; i++) {
			const texture = PIXI.Texture.from(`../assets/images/the_knight/Idle (${i}).png`);
			idleTextures.push(texture);
		}
		const idleSprite = new PIXI.AnimatedSprite(idleTextures);
		idleSprite.animationSpeed = 0.25;
		return idleSprite;
	}

	createRunAnimation() {
		const runTextures = [];
		for (let i = 1; i <= 10; i++) {
			const texture = PIXI.Texture.from(`../assets/images/the_knight/Run (${i}).png`);
			runTextures.push(texture);
		}
		const runSprite = new PIXI.AnimatedSprite(runTextures);
		runSprite.animationSpeed = 0.25;
		return runSprite;
	}

	createJumpAnimation() {
		const jumpTextures = [];
		for (let i = 1; i <= 10; i++) {
			const texture = PIXI.Texture.from(`../assets/images/the_knight/Jump (${i}).png`);
			jumpTextures.push(texture);
		}
		const jumpSprite = new PIXI.AnimatedSprite(jumpTextures);
		jumpSprite.animationSpeed = 0.25;
		return jumpSprite;
	}

	createGroundAttackAnimation() {
		const groundAttackTextures = [];
		for (let i = 1; i <= 10; i++) {
			const texture = PIXI.Texture.from(`../assets/images/the_knight/Attack (${i}).png`);
			groundAttackTextures.push(texture);
		}
		const groundAttackSprite = new PIXI.AnimatedSprite(groundAttackTextures);
		groundAttackTextures.animationSpeed = 0.25;
		return groundAttackSprite;
	}

	createAirAttackAnimation() {
		const airAttackTextures = [];
		for (let i = 1; i <= 10; i++) {
			const texture = PIXI.Texture.from(`../assets/images/the_knight/JumpAttack (${i}).png`);
			airAttackTextures.push(texture);
		}
		const airAttackSprite = new PIXI.AnimatedSprite(airAttackTextures);
		airAttackSprite.animationSpeed = 0.25;
		return airAttackSprite;
	}

	getAnimations() {
		return this.animations;
	}
}

