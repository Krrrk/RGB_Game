export { startTicker };
import { createBackground, updateBackground } from './../views/background.js';
import { updateSprite } from './../views/sprite.js';

function startTicker(app, menu) {
	app.ticker.add(delta => {
		menu.updateMenu(delta);
		updateBackground(app, delta);
		updateSprite(app, delta);
	});
}

