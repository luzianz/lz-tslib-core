/// <reference path="./Interfaces/FAction.d.ts" />

import DisposerBase = require('./DisposerBase');

class DelegateDisposer extends DisposerBase {
	
	constructor(private _onDispose: FAction) {
		super();
	}

	protected onDispose(): void {
		if (this._onDispose) {
			this._onDispose();
		}
	}
}

export = DelegateDisposer;