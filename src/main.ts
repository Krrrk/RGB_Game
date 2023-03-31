// Your main game file (e.g., main.js or index.js)
import * as PIXI from 'pixi.js';

import { renderSprite } from './views/sprite.js';
import { createBackground } from './background.js';
import { renderWindow } from './views/renderer.js';
import { startTicker } from './controllers/ticker.js';

const Application = PIXI.Application;

const app = new Application({
	width: 1920,
	height: 1080,
	antialias: true
});

renderWindow(app);
createBackground(app);
renderSprite(app);
startTicker(app);