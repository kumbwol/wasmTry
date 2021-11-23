import * as PIXI from 'pixi.js';

export class Loader
{
	constructor(loader: PIXI.Loader, callback: any)
	{
		loader
			.add("image0", "./project/assets/image0.png")
			.load(() => callback.setup());
	}
}
