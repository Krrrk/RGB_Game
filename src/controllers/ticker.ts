import * as PIXI from 'pixi.js';

export class Ticker {
	constructor(app, gameController, menu, sprite) {
		this.app = app;
		this.gameController = gameController;
		this.menu = menu;
		this.sprite = sprite;

		this.startTicker(this.app, this.menu, this.sprite);
	}

	startTicker(app, menu, sprite) {
		app.ticker.add(delta => {
			this.menu.updateMenu(delta);
			// updateBackground(app, delta);
			if (this.gameController.getGameState() === this.gameController.GameState.InGame) {
				this.sprite.updateSprite(this.app, delta);
			}
		});
	}
}

