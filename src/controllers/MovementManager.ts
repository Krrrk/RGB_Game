import * as PIXI from 'pixi.js';

export class MovementManager {
    constructor(sprite, animationManager) {
        this.sprite = sprite;
		this.animationManager = animationManager;
		this.currentMovementState = 'idle';

        this.char1Velocity = { x: 0, y: 0 };
        this.grounded = true;

        this.jumpStartY = 0;
        this.jumpTime = 0;
        this.jumpHeight = 200;
        this.jumpDuration = 30;
		this.groundLevel = 0;
    }

    parabolicJump(time, jumpHeight, jumpDuration) {
        const g = (4 * jumpHeight) / Math.pow(jumpDuration, 2);
        const v0 = Math.sqrt(2 * g * jumpHeight);
        const y = v0 * time - 0.5 * g * Math.pow(time, 2);
        return y;
    }

    updateMovement(app, delta) {
        const { char1Velocity, grounded, jumpTime, jumpHeight, jumpDuration, parabolicJump } = this;
        const { activeSprite, idleSprite, runSprite, jumpSprite } = this.sprite;

		this.groundLevel = app.screen.height / 1.31;

        if (char1Velocity.x > 5)
            char1Velocity.x = 5;
        if (char1Velocity.x < -5)
            char1Velocity.x = -5;
        if (char1Velocity.y != 0)
            console.log(char1Velocity.y);

		if (!grounded) {
			this.jumpTime += delta;
			const newY = this.jumpStartY - this.parabolicJump(jumpTime, jumpHeight, jumpDuration);
			this.sprite.spriteContainer.y = newY;

			if (newY > this.groundLevel) {
				this.grounded = true;
				this.jumpTime = 0;
				this.sprite.spriteContainer.y = this.groundLevel;
			}
		}

        if (!grounded) {
			this.currentMovementState = 'jump';
        } 
		else if (char1Velocity.x !== 0) {
			this.currentMovementState = 'run';
        }
		else {
			this.currentMovementState = 'idle';
        }

        this.sprite.spriteContainer.x += char1Velocity.x * delta;
        this.sprite.spriteContainer.y += char1Velocity.y * delta;

        if (char1Velocity.x < 0)
			this.sprite.lookDirection = 'left';
        if (char1Velocity.x > 0)
			this.sprite.lookDirection = 'right';
    }

	updateVelocityX(direction) {
		if (direction === 'right')
			this.char1Velocity.x += 8;
		else if (direction === 'left')
			this.char1Velocity.x -= 8;
	}

	stopVelocity() {
		this.char1Velocity.x = 0;
	}

	jump() {
		if (this.grounded === true) {
			this.grounded = false;
			this.jumpStartY = this.sprite.spriteContainer.position.y;
			this.jumpTime = 0;
		}
	}

	getCurrentMovementState() {
		return this.currentMovementState;
	}
}

