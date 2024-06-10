/**
  * This is the preloader.ts code that runs
  * By: Evgeny Vovk
  * Version: 1.0
  * Since: 2024-05-21
  */

import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        //  We loaded this image in our Boot Scene, so we can display it here
        this.background = this.add.image(1920 / 2, 1080 / 2, "background");

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(1920/2, 1080/2, 800, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(1920/2 - 400, 1080/2, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress: number) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = (800 * progress);

        });
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');

        this.load.image('playButton', 'playButton.png');
        this.load.image('controlsButton', 'controlsButton.png');
        this.load.image('gray_background', 'gray_background.jpg');
        this.load.image('blue_background', 'blue_background.jpg');
        this.load.image('title', 'title.png');

        this.load.image('doge', 'doge.jpg');
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }
}
