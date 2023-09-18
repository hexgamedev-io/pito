import Phaser from "phaser";
import mictiaPng from "./mictia.png";

class Main extends Phaser.Scene {
    constructor(){
        super("main");
    }
    
    preload(){
        this.load.spritesheet('mictia', mictiaPng, {frameWidth: 80});
    }
    
    create(){
        this.mictia = this.add.sprite(400,300, 'mictia');
        
        this.anims.create({
            key: 'watch',
            frames: this.anims.generateFrameNumbers('mictia'),
            frameRate: 16,
        })
        
        this.mictia.play({key: 'watch', repeat: -1});
    }
}

new Phaser.Game({
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    scene: [Main],
    backgroundColor: 0xffffff,
});
