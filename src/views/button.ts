// views/button.ts
import * as PIXI from 'pixi.js';

export default class Button {
	public text: PIXI.Text;
	public box: PIXI.Graphics;
	public bg: PIXI.Graphics;

	constructor(buttonText: string, x: number, y: number, app: PIXI.Application, selected: boolean = false) {
		this.text = new PIXI.Text(buttonText, {
			fontFamily: 'Arial',
			fontSize: 24,
			fill: selected ? 'white' : 'gray',
		});

		this.text.x = x - this.text.width / 2;
		this.text.y = y - this.text.height / 2;

		const boxWidth = this.text.width + 20;
		const boxHeight = this.text.height + 10;
		const color = selected ? '0xAAAAAA' : 0x444444;

		this.bg = new PIXI.Graphics();
		this.bg.beginFill(color); // Set the background color
		this.bg.drawRect(
			this.text.x - 10,
			this.text.y - 5,
			boxWidth,
			boxHeight
		);
		this.bg.endFill();
		app.stage.addChild(this.bg);

		this.box = new PIXI.Graphics();
		this.box.lineStyle(2, 0xFFFFFF);
		this.box.drawRect(
			this.text.x - 10,
			this.text.y - 5,
			boxWidth,
			boxHeight
		);
		app.stage.addChild(this.box);
		app.stage.addChild(this.text);
	}


	setSelected(selected: boolean): void {
		this.text.style.fill = selected ? 'white' : 'gray';

		const boxFillColor = selected ? 0xAAAAAA : 0x444444;

		this.box.clear()
			.lineStyle(2, 0xFFFFFF)
			.beginFill(boxFillColor)
			.drawRect(
				this.text.x - 10,
				this.text.y - 5,
				this.text.width + 20,
				this.text.height + 10
			)
			.endFill();
	}

	setVisible(visible: boolean): void {
		this.text.visible = visible;
		this.box.visible = visible;
		this.bg.visible = visible;
	}
}

