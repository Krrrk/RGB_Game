// views/button.ts
import * as PIXI from 'pixi.js';

export default class Button {
	public text: PIXI.Text;
	public box: PIXI.Graphics;

	constructor(buttonText: string, x: number, y: number, app: PIXI.Application, selected: boolean = false) {
		this.text = new PIXI.Text(buttonText, {
			fontFamily: 'Arial',
			fontSize: 24,
			fill: selected ? 'white' : 'gray',
		});

		this.text.x = x - this.text.width / 2;
		this.text.y = y - this.text.height / 2;
		app.stage.addChild(this.text);

		const boxWidth = this.text.width + 20;
		const boxHeight = this.text.height + 10;

		this.box = new PIXI.Graphics();
		this.box.lineStyle(2, 0xFFFFFF);
		this.box.drawRect(
			this.text.x - 10,
			this.text.y - 5,
			boxWidth,
			boxHeight
		);
		app.stage.addChild(this.box);
	}

	setVisible(visible: boolean): void {
		this.text.visible = visible;
		this.box.visible = visible;
	}
}

