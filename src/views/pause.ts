// pause.ts
import * as PIXI from 'pixi.js';

export default class Pause {
    private app: PIXI.Application;
    private paused: boolean = false;
    private pauseOverlay: PIXI.Graphics;

    constructor(app: PIXI.Application) {
        this.app = app;
        this.createPauseOverlay();
    }

    public togglePause(): void {
        this.paused = !this.paused;
        this.pauseOverlay.visible = this.paused;
        this.app.ticker.speed = this.paused ? 0 : 1;
    }

    private createPauseOverlay(): void {
        this.pauseOverlay = new PIXI.Graphics();
        this.pauseOverlay.beginFill(0x000000, 0.5);
        this.pauseOverlay.drawRect(0, 0, this.app.screen.width, this.app.screen.height);
        this.pauseOverlay.endFill();
        this.pauseOverlay.visible = false;
        this.app.stage.addChild(this.pauseOverlay);
    }
}

