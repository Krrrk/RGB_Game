const Application = PIXI.Application;

const app = new Application({
	width: 1920,
	height: 1080,
	transparent: false,
	antialias: true
});

app.renderer.backgroundColor = 0x23395D;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

const stage = new PIXI.Container();

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
char1Sprite.position.set(app.screen.width / 2, app.screen.height / 2);

// char1Sprite.x = 500;
// char1Sprite.y = 500;

char1Sprite.anchor.set(0.5, 0.5);

char1Sprite.interactive = true;
char1Sprite.buttonmode = true;

char1Sprite.on('pointerdown', function() {
	char1Sprite.scale.x += 0.1;
	char1Sprite.scale.y += 0.1;
});

document.addEventListener('keydown', function(e) {
	if(e.key === 'ArrowRight' || e.key === 'd')
		char1Velocity.x += 8;
	if(e.key === 'ArrowLeft' || e.key === 'a')
		char1Velocity.x -= 8;
	if(e.key === 'ArrowUp' || e.key === 'w')
		char1Velocity.y -= 8;
	if(e.key === 'ArrowDown' || e.key === 's')
		char1Velocity.y += 8;

})

document.addEventListener('keyup', function (e) {
  if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'ArrowLeft' || e.key === 'a') char1Velocity.x = 0;
  if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'ArrowDown' || e.key === 's') char1Velocity.y = 0;
});

const char1Velocity = { x: 0, y: 0};

app.ticker.add(delta => loop(delta));

function loop(delta) {
	const rect = new Graphics();
	rect.beginFill(0xFFFFFF)
	.drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 10, 10)
	.endFill()

	app.stage.addChild(rect);

	setTimeout(() => {
		fadeOut(rect, 1000);
	}, 1000)


	if (char1Velocity.x > 5)
		char1Velocity.x = 5;
	if (char1Velocity.y > 5)
		char1Velocity.y = 5;
	if (char1Velocity.x < -5)
		char1Velocity.x = -5;
	if (char1Velocity.y < -5)
		char1Velocity.y = -5;
	char1Sprite.x += char1Velocity.x * delta;
	char1Sprite.y += char1Velocity.y * delta;

	if (char1Velocity.x < 0)
		char1Sprite.scale.x = -Math.abs(char1Sprite.scale.x);;
	if (char1Velocity.x > 0)
		char1Sprite.scale.x = Math.abs(char1Sprite.scale.x);;
}


function fadeOut(rect, duration) {
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


