import * as PIXI from 'pixi.js';

export class GameManager
{
	constructor(mainContainer: PIXI.Container)
	{
		console.log("Here comes the game");

		let imageTexture = PIXI.Texture.from("image0");
		let imageSprite = new PIXI.Sprite(imageTexture);
		imageSprite.x = 200;
		imageSprite.y = 200;


		mainContainer.addChild(imageSprite);
	}
}
