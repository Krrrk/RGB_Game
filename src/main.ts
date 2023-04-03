// Your main game file (e.g., main.js or index.js)
import * as PIXI from 'pixi.js';

import GameController from './controllers/GameController.ts'

const Application = PIXI.Application;

const app = new Application({
	width: 1920,
	height: 1080,
	antialias: true
});


const gameController = new GameController(app);

