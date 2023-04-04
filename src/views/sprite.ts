import * as PIXI from 'pixi.js';
import { MovementManager } from './../controllers/MovementManager';
import { AnimationManager } from './AnimationManager';
import { Attack } from './Attack';

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
        const animations = this.animationManager.animations.getAnimations();

        for (const key in animations) {
            if (animations.hasOwnProperty(key)) {
                const sprite = animations[key];
                this.spriteContainer.addChild(sprite);

                sprite.width = 200;
                sprite.height = 200;
                sprite.position.set(0, 0);
                sprite.anchor.set(0.5, 0.5);
                sprite.interactive = true;
                sprite.buttonMode = true;
            }
        }

        this.spriteContainer.position.set(this.app.screen.width / 8, this.app.screen.height / 1.31);

        const idleSprite = animations.idle;
        idleSprite.on('pointerdown', () => {
            idleSprite.scale.x += 0.1;
            idleSprite.scale.y += 0.1;
        });
    }

	// renderSprite() {
 //        const { idleSprite, runSprite, jumpSprite, groundAttackSprite, airAttackSprite } = this.animationManager;
	//
	// 	this.spriteContainer.addChild(idleSprite);
	// 	this.spriteContainer.addChild(runSprite);
	// 	this.spriteContainer.addChild(jumpSprite);
	// 	this.spriteContainer.addChild(jumpSprite);
	// 	this.spriteContainer.addChild(jumpSprite);
	//
 //        [idleSprite, runSprite, jumpSprite].forEach(sprite => {
 //            sprite.width = 200;
 //            sprite.height = 200;
 //            sprite.position.set(0, 0);
 //            sprite.anchor.set(0.5, 0.5);
 //            sprite.interactive = true;
 //            sprite.buttonmode = true;
 //        });
	//
	// 	 this.spriteContainer.position.set(this.app.screen.width / 8, this.app.screen.height / 1.31);
	//
 //        idleSprite.on('pointerdown', () => {
 //            idleSprite.scale.x += 0.1;
 //            idleSprite.scale.y += 0.1;
 //        });
 //    }

	move(direction) {
		this.movementManager.updateVelocityX(direction);
	}

	stopMove() {
		this.movementManager.stopVelocity();
	}

	jump() {
		this.movementManager.jump();
	}
	
	attack() {
		if (this.movementManager.getCurrentMovementState === 'jump') {
			//perform airAttack
		}
		else {
			//perform groundAttack
		}
	}

	getMovementManager() {
		return this.MovementManager;
	}
}

