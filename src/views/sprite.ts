import * as PIXI from 'pixi.js';
import { createIdleAnimation, createRunAnimation, createJumpAnimation } from './animations.ts';
import { MovementManager } from './../controllers/MovementManager';
import { AnimationManager } from './AnimationManager';

export class Sprite {
    constructor(app) {
        this.app = app;

		this.animationManager = new AnimationManager();
        this.movementManager = new MovementManager(this, this.animationManager);

		this.lookDirection = 'right';
		
		this.spriteContainer = new PIXI.Container();
		app.stage.addChild(this.spriteContainer);
    }

	updateSprite(app, delta) {
		this.movementManager.updateMovement(app, delta);
		this.animationManager.setActiveAnimation(this.movementManager.getCurrentMovementState(), this.lookDirection);
		this.animationManager.syncSpritePositions(); // Remove the parameter
	}

	renderSprite() {
        const { idleSprite, runSprite, jumpSprite } = this.animationManager;

		this.spriteContainer.addChild(idleSprite);
		this.spriteContainer.addChild(runSprite);
		this.spriteContainer.addChild(jumpSprite);

        [idleSprite, runSprite, jumpSprite].forEach(sprite => {
            sprite.width = 200;
            sprite.height = 200;
            sprite.position.set(0, 0);
            sprite.anchor.set(0.5, 0.5);
            sprite.interactive = true;
            sprite.buttonmode = true;
        });

		 this.spriteContainer.position.set(this.app.screen.width / 8, this.app.screen.height / 1.31);

        idleSprite.on('pointerdown', () => {
            idleSprite.scale.x += 0.1;
            idleSprite.scale.y += 0.1;
        });
    }

	move(direction) {
		this.movementManager.updateVelocityX(direction);
	}

	stopMove() {
		this.movementManager.stopVelocity();
	}

	jump() {
		this.movementManager.jump();
	}

	getMovementManager() {
		return this.MovementManager;
	}
}

