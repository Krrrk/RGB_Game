import * as PIXI from 'pixi.js';

export class Window {
	constructor(app) {
		this.app = app;
		this.renderWindow(this.app);
	}

	renderWindow(app) {
		app.renderer.resize(window.innerWidth, window.innerHeight);
		app.renderer.view.style.position = 'absolute';
		document.body.appendChild(app.view);
		const stage = new PIXI.Container();
	}
}
