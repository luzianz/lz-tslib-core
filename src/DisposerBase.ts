/// <reference path="./Interfaces/IDisposable.d.ts" />

class DisposerBase implements IDisposable {

	private _isDisposed = false;
	
	public get isDisposed(): boolean {
		return this._isDisposed;
	}
	
	public dispose(): void {
		if (!this._isDisposed) {
			this.onDispose();
			this._isDisposed = true;
		}
	}

	protected onDispose(): void { }
}

export = DisposerBase;