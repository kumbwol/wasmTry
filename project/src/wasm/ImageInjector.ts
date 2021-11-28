export class ImageInjector
{
	private _inputFile: any;

	constructor()
	{
		this._inputFile = document.getElementById('inputfile');

		this._inputFile.addEventListener('change', () => this.loadToCanvas());
	}

	private loadToImage()
	{
		let fr=new FileReader();
		fr.onload=function(){
			(document.getElementById('img') as any).src=fr.result;
		};

		fr.readAsDataURL(this._inputFile.files[0]);

		console.log(this._inputFile.files);
	}

	private loadToCanvas()
	{
		let fr=new FileReader();
		fr.onload=function(){
			(document.getElementById('img') as any).src=fr.result;
		};

		fr.readAsDataURL(this._inputFile.files[0]);

		console.log(this._inputFile.files);
	}


	public func()
	{
		console.log("hey");
	}
}
