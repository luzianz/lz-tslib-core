/// <reference path="node_modules/lz-tslib-interfaces/IDisposable.d.ts" />
/// <reference path="node_modules/lz-tslib-interfaces/FAction.d.ts" />

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