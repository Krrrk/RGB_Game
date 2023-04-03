// AnimationManager.ts
import * as PIXI from 'pixi.js';
import { createIdleAnimation, createRunAnimation, createJumpAnimation } from './animations';

export class AnimationManager {
    constructor() {
        this.idleSprite = createIdleAnimation();
        this.runSprite = createRunAnimation();
        this.jumpSprite = createJumpAnimation();
        this.activeSprite = this.idleSprite;
    }

    setActiveAnimation(animationName, lookDirection) {
        this.idleSprite.visible = false;
        this.runSprite.visible = false;
        this.jumpSprite.visible = false;
		let newActiveSprite;
        if (animationName === 'idle') {
            newActiveSprite = this.idleSprite;
        } else if (animationName === 'run') {
            newActiveSprite = this.runSprite;
        } else if (animationName === 'jump') {
            newActiveSprite = this.jumpSprite;
        }

        if (newActiveSprite) {
            newActiveSprite.visible = true;
            newActiveSprite.play();

			if (lookDirection === 'left')
				newActiveSprite.scale.x = -Math.abs(newActiveSprite.scale.x);
			else if (lookDirection === 'right')
				newActiveSprite.scale.x = Math.abs(newActiveSprite.scale.x);
            this.activeSprite = newActiveSprite;
        }
    }

	syncSpritePositions() {
		[this.idleSprite, this.runSprite, this.jumpSprite].forEach(sprite => {
			sprite.x = 0;
			sprite.y = 0;
		});
	}
}

