// Your main game file (e.g., main.js or index.js)
import * as PIXI from 'pixi.js';

import Menu from './views/menu';
import { renderSprite } from './views/sprite.js';
import { renderWindow } from './views/renderer.js';
import { startTicker } from './controllers/ticker.js';

const Application = PIXI.Application;

const app = new Application({
	width: 1920,
	height: 1080,
	antialias: true
});




renderWindow(app);
const menu = new Menu(app);
startTicker(app, menu);
// renderSprite(app);
