export { startTicker };
// import { createBackground, updateBackground } from './../views/background.ts';
import { updateSprite } from './../views/sprite.ts';

function startTicker(app, menu) {
	app.ticker.add(delta => {
		menu.updateMenu(delta);
		// updateBackground(app, delta);
		updateSprite(app, delta);
	});
}

