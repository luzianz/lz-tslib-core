/// <reference path="../node_modules/lz-tslib-interfaces/ISpan" />
/// <reference path="../node_modules/lz-tslib-interfaces/FGetter" />

class StartDerrivedSpan implements ISpan {
	constructor(
		private fGetEndIndex: FGetter<number>,
		private fGetLength: FGetter<number>) {
	}

	getStartIndex(): number {
		return this.fGetEndIndex() - this.fGetLength() + 1;
	}

	getLength(): number {
		return this.fGetLength();
	}

	getEndIndex(): number {
		return this.fGetEndIndex();
	}
}

export = StartDerrivedSpan;