/// <reference path="node_modules/lz-tslib-interfaces/IDisposable" />

class CompositeDisposer implements IDisposable {
	private disposables: IDisposable[] = [];

	add(disposable: IDisposable) {
		this.disposables.push(disposable);
	}

	dispose() {
		this.disposables.forEach(function (disposable) {
			disposable.dispose();
		});
		this.disposables.splice(0, this.disposables.length);
	}
}

export = CompositeDisposer;