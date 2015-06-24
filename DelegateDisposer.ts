/// <reference path="typings/lz-tslib-interfaces/index.d.ts" />

class DelegateDisposer implements IDisposable {
	constructor(private onDispose: FAction) {
	}

	dispose() {
		if (this.onDispose) {
			this.onDispose();
		}
	}
}

export = DelegateDisposer;