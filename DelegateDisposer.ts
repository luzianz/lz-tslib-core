/// <reference path="node_modules/lz-tslib-interfaces/IDisposable" />
/// <reference path="node_modules/lz-tslib-interfaces/FAction" />

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