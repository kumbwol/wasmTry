import * as PIXI from 'pixi.js';

export class GameManager
{
	constructor(mainContainer: PIXI.Container)
	{
		let imageTexture = PIXI.Texture.from("image0");
		let imageSprite = new PIXI.Sprite(imageTexture);
		imageSprite.x = 200;
		imageSprite.y = 200;
		mainContainer.addChild(imageSprite);

		//THIS SHOULD ONLY WORK ONCE EXTRACTED
		let compressedImageTexture = PIXI.Texture.from("image1");
		let compressedImageSprite = new PIXI.Sprite(compressedImageTexture);
		compressedImageSprite.x = 600;
		compressedImageSprite.y = 200;
		mainContainer.addChild(compressedImageSprite);
	}
}
