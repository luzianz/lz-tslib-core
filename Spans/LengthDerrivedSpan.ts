/// <reference path="../node_modules/lz-tslib-interfaces/ISpan" />
/// <reference path="../node_modules/lz-tslib-interfaces/FGetter" />

class LengthDerrivedSpan implements ISpan {
	constructor(
		private fGetStartIndex: FGetter<number>,
		private fGetEndIndex: FGetter<number>) {
	}

	getStartIndex(): number {
		return this.fGetStartIndex();
	}

	getLength(): number {
		return this.fGetEndIndex() - this.fGetStartIndex();
	}

	getEndIndex(): number {
		return this.fGetEndIndex();
	}
}

export = LengthDerrivedSpan;