/// <reference path="./Interfaces/FAction.d.ts" />

import DisposerBase = require('./DisposerBase');

class CompositeDisposer extends DisposerBase {
	
	private disposables: IDisposable[] = [];

	public add(disposable: IDisposable) {
		if (this.isDisposed) return;
		
		this.disposables.push(disposable);
	}

	protected onDispose(): void {
		this.disposables.forEach((disposable) => disposable.dispose());
		this.disposables.splice(0, this.disposables.length);
	}
}

export = CompositeDisposer;