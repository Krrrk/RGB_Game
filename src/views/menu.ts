// views/menu.ts
import * as PIXI from 'pixi.js';
import Button from './button.ts';
// import { renderSprite } from './sprite.ts';

export enum SubMenu {
  Main,
  Options,
  Credits,
}

export class Menu {

	private app;
	private gameController;
	private currentMenu: SubMenu = SubMenu.Main;
	private mainMenuChoices: string[];
	private optionsChoices: string[];
	private mainMenuSelectedIndex: number;
	private optionsMenuSelectedIndex: number;
	private credits: string[];
	private creditsTexts: PIXI.Text[];
	private mainMenuButtons: Button[];
	private optionsButtons: Button[];
	private backButton: Button;

	constructor(app, gameController) {
		this.app = app;
		this.gameController = gameController;
		this.mainMenuChoices = ['Start Game', 'Options', 'Credits'];
		this.optionsChoices = ['Volume', 'Music', 'Back'];
		this.selectedIndex = 0;
		this.mainMenuSelectedIndex = 0;
		this.optionsMenuSelectedIndex = 0;
		this.credits = ['Chricke', 'Erik', 'Anton', 'Basse', 'Baiwei'];
		this.creditsTexts = [];

		this.createMenuButtons();
		this.createCredits();
		this.createOptions();
		this.showMenu(SubMenu.Main);
	}

	private showMenu(menu: SubMenu): void {
		this.hideAllMenus();

		switch (menu) {
			case SubMenu.Main:
				this.mainMenuButtons.forEach(button => button.setVisible(true));
				break;
			case SubMenu.Options:
				this.optionsButtons.forEach(button => button.setVisible(true));
				break;
			case SubMenu.Credits:
				this.creditsTexts.forEach(text => (text.visible = true));
				this.backButton.setVisible(true);
				break;
		}

		this.currentMenu = menu;
	}

	private hideAllMenus(): void {
		this.mainMenuButtons.forEach(button => button.setVisible(false));
		this.optionsButtons.forEach(button => button.setVisible(false));
		this.creditsTexts.forEach(text => (text.visible = false));
		this.backButton.setVisible(false);
	}

	private createMenuButtons(): void {
		this.mainMenuButtons = this.mainMenuChoices.map((option, index) => {
			const x = this.app.screen.width / 2;
			const y = this.app.screen.height / 2 - this.mainMenuChoices.length * 20 / 2 + index * 50;
			const selected = index === this.mainMenuSelectedIndex;
			return new Button(option, x, y, this.app, selected);
		});
	}

	private createCredits(): void {
		this.credits.forEach((name, index) => {
			const creditText = new PIXI.Text(name, {
				fontFamily: 'Arial',
				fontSize: 24,
				fill: 'white',
			});

			creditText.x = this.app.screen.width / 2 - creditText.width / 2;
			creditText.y = this.app.screen.height / 2 - this.credits.length * 30 / 2 + index * 30;
			creditText.visible = false;

			this.creditsTexts.push(creditText);
			this.app.stage.addChild(creditText);
		});

		const backButtonX = this.app.screen.width / 2;
		const backButtonY = this.app.screen.height / 2 + this.credits.length * 30 / 2 + 30;
		this.backButton = new Button('Back', backButtonX, backButtonY, this.app, 1);

		this.backButton.setVisible(false);
	}

	private createOptions(): void {
		this.optionsButtons = this.optionsChoices.map((option, index) => {
			const x = this.app.screen.width / 2;
			const y = this.app.screen.height / 2 - this.optionsChoices.length * 20 / 2 + index * 50;
			const selected = index === this.optionsMenuSelectedIndex;
			return new Button(option, x, y, this.app, selected);
		});

		this.optionsButtons.forEach(optionButton => {
			optionButton.setVisible(false);
		});

	}

	private updateMenu(key: string): void {
		let buttons: Button[];
		let selectedIndex: number;

		switch (this.currentMenu) {
			case SubMenu.Main:
				buttons = this.mainMenuButtons;
				selectedIndex = this.mainMenuSelectedIndex;
				break;
			case SubMenu.Options:
				buttons = this.optionsButtons;
				selectedIndex = this.optionsMenuSelectedIndex;
				break;
			default:
				return;
		}

		buttons[selectedIndex].text.style.fill = 'gray';
		buttons[selectedIndex].setSelected(false);

		if (['ArrowUp', 'w'].includes(key)) {
			selectedIndex = (selectedIndex - 1 + buttons.length) % buttons.length;
		} else if (['ArrowDown', 's'].includes(key)) {
			selectedIndex = (selectedIndex + 1) % buttons.length;
		}

		switch (this.currentMenu) {
			case SubMenu.Main:
				this.mainMenuSelectedIndex = selectedIndex;
				break;
			case SubMenu.Options:
				this.optionsMenuSelectedIndex = selectedIndex;
				break;
		}

		buttons[selectedIndex].text.style.fill = 'white';
		buttons[selectedIndex].setSelected(true);
	}

	private selectOption(): void {
		switch (this.currentMenu) {
			case SubMenu.Main:
				const selectedMainOption = this.mainMenuChoices[this.mainMenuSelectedIndex];
				console.log(`Selected option: ${selectedMainOption}`);

				switch (selectedMainOption) {
					case 'Start Game':
						// Start the game
						this.hideAllMenus();
						this.gameController.startGame();
						// renderSprite(this.app);
						break;
					case 'Options':
						// Show the options menu
						this.showMenu(SubMenu.Options);
						break;
					case 'Credits':
						// Show the credits
						this.showMenu(SubMenu.Credits);
						break;
				}
				break;

			case SubMenu.Options:
				const selectedOption = this.optionsChoices[this.optionsMenuSelectedIndex];
				console.log(`Selected option: ${selectedOption}`);

				switch (selectedOption) {
					case 'Volume':
						// Handle volume option
						break;
					case 'Music':
						// Handle music option
						break;
					case 'Back':
						this.showMenu(SubMenu.Main);
						break;
				}
				break;

			case SubMenu.Credits:
				this.showMenu(SubMenu.Main);
				break;
		}
	}

	private hideMainMenu(): void {
		this.mainMenuButtons.forEach(button => button.setVisible(false));
	}

	private showMainMenu(): void {
		this.mainMenuButtons.forEach(button => button.setVisible(true));
	}
}

