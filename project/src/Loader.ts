import * as PIXI from 'pixi.js';

export class Loader
{
	constructor(loader: PIXI.Loader, callback: any)
	{
		loader
			.add("image0", "./project/assets/image0.png")
			.add("image1", "./project/assets/image1.png") //THIS SHOULD ONLY WORK ONCE EXTRACTED
			.load(() => callback.setup());
	}
}
