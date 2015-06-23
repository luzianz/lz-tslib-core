/// <reference path="../node_modules/lz-tslib-interfaces/ISpan" />
/// <reference path="../node_modules/lz-tslib-interfaces/FGetter" />

class EndDerrivedSpan implements ISpan {
	constructor(
		private fGetStartIndex: FGetter<number>,
		private fGetLength: FGetter<number>) {
	}

	get startIndex(): number {
		return this.fGetStartIndex();
	}

	get length(): number {
		return this.fGetLength();
	}

	get endIndex(): number {
		return this.fGetStartIndex() + this.fGetLength() - 1;
	}
}

export = EndDerrivedSpan;