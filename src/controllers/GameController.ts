import * as PIXI from 'pixi.js';
import { Sprite } from './../views/sprite'
import { MovementManager } from './MovementManager.ts';
import { InputManager } from './InputManager.ts';
import { Window } from './../views/Window.ts';
import { Ticker } from './ticker.ts';
import { Background } from './../views/background.ts';
import { Menu } from './../views/menu.ts';

export default class GameController {
	public GameState = {
		StartMenu: 0,
		InGame: 1,
		Paused: 2,
	}
	gameState: GameState;

	constructor(app) {

		this.app = app;
		this.gameState = this.GameState.StartMenu;

		this.window = new Window(this.app);
		this.background = new Background(this.app);
		this.menu = new Menu(this.app, this);
		this.sprite = new Sprite(this.app);
		this.inputManager = new InputManager(window, this, this.sprite, this.menu, this.sprite);
		this.ticker = new Ticker(this.app, this, this.menu, this.sprite);
	}

	getGameState()
	{
		return this.gameState;
	}

	setGameState(gameState)
	{
		this.gameState = gameState;
	}

	startGame() {
		this.setGameState(this.GameState.InGame);
		this.sprite.renderSprite(this.app);
	}

}

