import * as PIXI from 'pixi.js';
import { ImageInjector } from "../wasm/ImageInjector";

export class GameManager
{
	constructor(mainContainer: PIXI.Container)
	{
		let imageTexture = PIXI.Texture.from("image0");
		let imageSprite = new PIXI.Sprite(imageTexture);
		imageSprite.x = 220;
		imageSprite.y = 320;
		mainContainer.addChild(imageSprite);

		//THIS SHOULD ONLY WORK ONCE EXTRACTED
		let compressedImageTexture = PIXI.Texture.from("image1");
		let compressedImageSprite = new PIXI.Sprite(compressedImageTexture);
		compressedImageSprite.x = 600;
		compressedImageSprite.y = 200;
		mainContainer.addChild(compressedImageSprite);

		console.log(imageSprite);
		let x = new ImageInjector();

		x.func();

		window.addEventListener("keydown", () =>
		{
			imageSprite.texture = PIXI.Texture.from(document.getElementById("img") as HTMLImageElement);
			imageSprite.texture.update();
		})
	}
}
