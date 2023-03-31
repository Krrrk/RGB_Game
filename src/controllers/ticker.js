export { startTicker };
import { createBackground, updateBackground } from './../background.js';
import { updateSprite } from './../views/sprite.js';

function startTicker(app) {
	app.ticker.add(delta => {
		updateBackground(app, delta);
		updateSprite(app, delta);
	});
}

