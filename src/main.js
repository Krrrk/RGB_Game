const Application = PIXI.Application;

const app = new Application({
	width: 500,
	height: 500,
	transparent: false,
	antialias: true
});

app.renderer.backgroundColor = 0x23395D;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const rectangle = new Graphics();
rectangle.beginFill(0xAA33BB)
.lineStyle(4, 0xFFEA00)
.drawRect(200, 200, 100, 120)
.endFill();

app.stage.addChild(rectangle);

const char1Texture = PIXI.Texture.from('../assets/images/the_knight/Idle (1).png');
const char1Sprite = new PIXI.Sprite(char1Texture);

app.stage.addChild(char1Sprite);

char1Sprite.width = 200;
char1Sprite.height = 200;

char1Sprite.x = 500;
char1Sprite.y = 500;

char1Sprite.anchor.set(0.5, 0.5);

char1Sprite.interactive = true;
char1Sprite.buttonmode = true;

char1Sprite.on('pointerdown', function() {
	char1Sprite.scale.x += 0.1;
	char1Sprite.scale.y += 0.1;
});

document.addEventListener('keydown', function(e) {
	if(e.key === 'ArrowRight' || e.key === 'd')
		char1Sprite.x += 10;
	if(e.key === 'ArrowLeft' || e.key === 'a')
		char1Sprite.x -= 10;
	if(e.key === 'ArrowUp' || e.key === 'w')
		char1Sprite.y -= 10;
	if(e.key === 'ArrowDown' || e.key === 's')
		char1Sprite.y += 10;

})

function loop(delta) {
	const rect = new Graphics();
	rect.beginFill(0xFFFFFF)
	.drawReact(Math.random() * app.screen.width, Math.random() * app.screen.height, 10, 10)
	.endFill()

	app.stage.addChild(rect);
}
