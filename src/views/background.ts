import * as PIXI from 'pixi.js';
import { Graphics, Sprite, Texture } from 'pixi.js';

export { createBackground };

function createBackground(app) {
  const texture = Texture.from('/../../assets/images/backgrounds/forest_01.jpg');
  const backgroundSprite = new Sprite(texture);

  // Adjust the sprite size to match the application's screen size
  backgroundSprite.width = app.screen.width;
  backgroundSprite.height = app.screen.height;

  // Add the sprite to the application stage
  app.stage.addChild(backgroundSprite);

  // app.renderer.backgroundColor = 0xFFA71A;
  const rect = new Graphics();
  rect.beginFill(0xFFFFFF)
    .drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 10, 10)
    .endFill();
}

// function createBackground(app) {
// 	const Graphics = PIXI.Graphics;
//
// 	const rectangle = new Graphics();
// 	rectangle.beginFill(0xAA33BB)
// 	.lineStyle(4, 0xFFEA00)
// 	.drawRect(200, 200, 100, 120)
// 	.endFill();
//
// 	app.stage.addChild(rectangle);
//
// 	app.renderer.backgroundColor = 0xFFA71A;
// 	const rect = new Graphics();
// 	rect.beginFill(0xFFFFFF)
// 	.drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 10, 10)
// 	.endFill()
//
// }

function updateBackground(app, delta) {
  // Update the background here if needed (e.g., scrolling, parallax, etc.)
	const Graphics = PIXI.Graphics;
	const rect = new Graphics();
	rect.beginFill(0xFFFFFF)
	.drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 10, 10)
	.endFill()

	app.stage.addChild(rect);

	setTimeout(() => {
		fadeOut(app, rect, 1000);
	}, 1000)

}

function fadeOut(app, rect, duration) {
	const step = 60 / duration;
	app.ticker.add(ticker);

	function ticker() {
		rect.alpha -= step;
		if (rect.alpha <= 0) {
			rect.alpha = 0,
				app.stage.removeChild(rect);
			app.ticker.remove(ticker);
		}
	}
}

