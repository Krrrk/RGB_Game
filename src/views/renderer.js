export { renderWindow };

function renderWindow(app) {
	app.renderer.resize(window.innerWidth, window.innerHeight);
	app.renderer.view.style.position = 'absolute';
	document.body.appendChild(app.view);
	const stage = new PIXI.Container();
}

