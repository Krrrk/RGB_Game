import * as PIXI from 'pixi.js';

import { Attack } from './Attack';
import { Menu } from './../views/Menu';

export class InputManager {
    constructor(eventTarget, gameController, attack, menu, sprite) {
        this.keyDownCallbacks = [];
        this.keyUpCallbacks = [];
		this.gameController = gameController;
        this.attack = attack;
		this.menu = menu;
		this.sprite = sprite;

        eventTarget.addEventListener('keydown', (e) => this.handleKeyDown(e));
        eventTarget.addEventListener('keyup', (e) => this.handleKeyUp(e));
    }

    registerKeyDownCallback(callback) {
        this.keyDownCallbacks.push(callback);
    }

    registerKeyUpCallback(callback) {
        this.keyUpCallbacks.push(callback);
    }

    handleKeyDown(e) {
		if (this.gameController.getGameState() === this.gameController.GameState.InGame) {
			if (e.key === 'ArrowRight' || e.key === 'd') {
				this.sprite.move('right');
            }
            if (e.key === 'ArrowLeft' || e.key === 'a') {
				this.sprite.move('left');
            }
            if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'Space') {
				this.sprite.jump();
            }
            if (e.key === 'e' || e.key === 'k') {
				this.sprite.attack();
			}

		}
		else if (this.gameController.getGameState() === this.gameController.GameState.StartMenu) {
			if (['ArrowUp', 'w', 'ArrowDown', 's'].includes(e.key)) {
				this.menu.updateMenu(e.key);
			} else if (['e', 'Enter'].includes(e.key)) {
				this.menu.selectOption();
			}


		}
		else if (this.gameController.getGameState() === this.gameController.GameState.Paused) {

		}
    }

    handleKeyUp(e) {
		if (this.gameController.getGameState() === this.gameController.GameState.InGame) {
			if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'ArrowLeft' || e.key === 'a') {
				this.sprite.stopMove();
            }
            this.keyUpCallbacks.forEach(callback => callback(e));
        } else if (this.gameController.getGameState() === this.gameController.GameState.StartMenu) {
            // Handle input events for the StartMenu state
        } else if (this.gameController.getGameState() === this.gameController.GameState.Paused) {
            // Handle input events for the Paused state
        }
    }
}

