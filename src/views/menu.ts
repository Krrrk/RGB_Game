// views/menu.ts
import * as PIXI from 'pixi.js';
import Button from './button.ts';
import { renderSprite } from './sprite.ts';

export default class Menu {
	private app: PIXI.Application;
	private mainMenuChoices: string[];
	private optionsChoices: string[];
	private selectedIndex: number;
	private credits: string[];
	private creditsTexts: PIXI.Text[];
	private mainMenuButtons: Button[];
	private optionsButtons: Button[];
	private backButton: Button;
	private optionsVisible: boolean = false;
	private mainMenuSelectedIndex: number;
	private optionsMenuSelectedIndex: number;

	constructor(app: PIXI.Application) {
		this.app = app;
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
		this.addKeyboardListeners();
	}

	private createMenuButtons(): void {
		this.mainMenuButtons = this.mainMenuChoices.map((option, index) => {
			const x = this.app.screen.width / 2;
			const y = this.app.screen.height / 2 - this.mainMenuChoices.length * 20 / 2 + index * 50;
			const selected = index === this.selectedIndex;
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
			const selected = index === this.selectedIndex;
			return new Button(option, x, y, this.app, selected);
		});

		this.optionsButtons.forEach(optionButton => {
			optionButton.setVisible(false);
		});

	}

	private addKeyboardListeners(): void {
		document.addEventListener('keydown', (e) => {
			if (['ArrowUp', 'w', 'ArrowDown', 's'].includes(e.key)) {
				this.updateMenu(e.key);
			} else if (['e', 'Enter'].includes(e.key)) {
				this.selectOption();
			}
		});
	}

	private updateMenu(key: string): void {
		const buttons = this.optionsVisible ? this.optionsButtons : this.mainMenuButtons;
		const selectedIndex = this.optionsVisible ? this.optionsMenuSelectedIndex : this.mainMenuSelectedIndex;
		buttons[selectedIndex].text.style.fill = 'gray';

		if (['ArrowUp', 'w'].includes(key)) {
			this.optionsVisible
				? (this.optionsMenuSelectedIndex = (this.optionsMenuSelectedIndex + 1) % buttons.length)
				: (this.mainMenuSelectedIndex = (this.mainMenuSelectedIndex - 1 + buttons.length) % buttons.length);
		} else if (['ArrowDown', 's'].includes(key)) {
			this.optionsVisible
				? (this.optionsMenuSelectedIndex = (this.optionsMenuSelectedIndex - 1 + buttons.length) % buttons.length)
				: (this.mainMenuSelectedIndex = (this.mainMenuSelectedIndex + 1) % buttons.length);
		}

		const newSelectedIndex = this.optionsVisible ? this.optionsMenuSelectedIndex : this.mainMenuSelectedIndex;
		buttons[newSelectedIndex].text.style.fill = 'white';
	}

	private selectOption(): void {
		if (this.optionsVisible) {
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
					this.hideOptions();
					break;
				}
		} else {
			const selectedOption = this.mainMenuChoices[this.mainMenuSelectedIndex];
			console.log(`Selected option: ${selectedOption}`);

			switch (selectedOption) {
				case 'Start Game':
					// Start the game
					this.hideMainMenu();
					renderSprite(this.app);
					break;
				case 'Options':
					// Show the options menu
					this.showOptions();
					break;
				case 'Credits':
					// Show the credits
					this.showCredits();
					break;
			}
		}
	}

	private hideMainMenu(): void {
		this.mainMenuButtons.forEach(button => button.setVisible(false));
	}

	private showMainMenu(): void {
		this.mainMenuButtons.forEach(button => button.setVisible(true));
	}

	private showCredits(): void {
		this.hideMainMenu();
		this.creditsTexts.forEach(text => text.visible = true);
		this.backButton.setVisible(true);

		document.addEventListener('keydown', this.handleCreditsKey);
	}

	private hideCredits(): void {
		this.showMainMenu();

		this.creditsTexts.forEach(text => text.visible = false);
		this.backButton.setVisible(false);

		document.removeEventListener('keydown', this.handleCreditsKey);
	}

	private handleCreditsKey = (e: KeyboardEvent): void => {
		if (['e', 'Enter'].includes(e.key)) {
			this.hideCredits();
		}
	};

	private showOptions(): void {
		this.optionsVisible = true;
		this.selectedIndex = 0;
		this.hideMainMenu();
		this.optionsButtons.forEach(button => button.setVisible(true));

		document.addEventListener('keydown', this.handleOptionsKey);
	}

	private hideOptions(): void {
		this.showMainMenu();
		this.optionsVisible = false;
		this.optionsMenuSelectedIndex = 0;
		this.optionsButtons.forEach(button => button.setVisible(false));

		this.mainMenuButtons[this.mainMenuSelectedIndex].text.style.fill = 'white';

		document.removeEventListener('keydown', this.handleOptionsKey);
	}

	private handleOptionsKey = (e: KeyboardEvent): void => {
		if (['ArrowUp', 'w', 'ArrowDown', 's'].includes(e.key)) {
			this.updateMenu(e.key);
		} else if (['e', 'Enter'].includes(e.key)) {
			const selectedOption = this.optionsChoices[this.selectedIndex];
			console.log(`Selected option: ${selectedOption}`);

			switch (selectedOption) {
				case 'Volume':
					// Handle volume option
					break;
				case 'Music':
					// Handle music option
					break;
				case 'Back':
					this.hideOptions();
					break;
			}
		}
	};

}

