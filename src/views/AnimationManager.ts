// AnimationManager.ts
import * as PIXI from 'pixi.js';
import { Animations } from './animations.ts';

export class AnimationManager {
    constructor() {
  //       this.idleSprite = createIdleAnimation();
  //       this.runSprite = createRunAnimation();
  //       this.jumpSprite = createJumpAnimation();
		// this.groundAttackSprite = createGroundAttackAnimation();
		// this.airAttackSprite = createAirAttackAnimation();
		this.animations = new Animations();
        this.activeSprite = this.animations.getAnimations('idle');
    }

  //   setActiveAnimation(animationName, lookDirection) {
		// for (const animation in this.animations.getAnimations()) {
		// 	animation.visible = false;
		// }
		//
		// let newActiveSprite = this.animations.getAnimations()[animationName];
		//
  //       if (newActiveSprite) {
  //           newActiveSprite.visible = true;
  //           newActiveSprite.play();
		//
		// 	if (lookDirection === 'left')
		// 		newActiveSprite.scale.x = -Math.abs(newActiveSprite.scale.x);
		// 	else if (lookDirection === 'right')
		// 		newActiveSprite.scale.x = Math.abs(newActiveSprite.scale.x);
  //           this.activeSprite = newActiveSprite;
  //       }
  //   }

  setActiveAnimation(animationName, lookDirection) {
    const animations = this.animations.getAnimations();

    for (const key in animations) {
        if (animations.hasOwnProperty(key)) {
            const sprite = animations[key];
            sprite.visible = false;
        }
    }

    let newActiveSprite = animations[animationName];

    if (newActiveSprite) {
        newActiveSprite.visible = true;
        newActiveSprite.play();

        if (lookDirection === 'left') {
            newActiveSprite.scale.x = -Math.abs(newActiveSprite.scale.x);
        } else if (lookDirection === 'right') {
            newActiveSprite.scale.x = Math.abs(newActiveSprite.scale.x);
        }
        this.activeSprite = newActiveSprite;
    }
}


	// syncSpritePositions() {
	// 	// for (const sprite in this.animations.getAnimations()) {
	// 	    const animations = this.animations.getAnimations();
	//
 //    for (const key in animations) {
	//
	// 		key.x = 0;
	// 		key.y = 0;
	// 	}
	// }

	syncSpritePositions() {
    const animations = this.animations.getAnimations();

    for (const key in animations) {
        if (animations.hasOwnProperty(key)) {
            const sprite = animations[key];
            sprite.x = 0;
            sprite.y = 0;
        }
    }
}
}

