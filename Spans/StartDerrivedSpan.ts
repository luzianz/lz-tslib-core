/// <reference path="../node_modules/lz-tslib-interfaces/ISpan.d.ts" />
/// <reference path="../node_modules/lz-tslib-interfaces/FGetter.d.ts" />

class StartDerrivedSpan implements ISpan {
	constructor(
		private fGetEndIndex: FGetter<number>,
		private fGetLength: FGetter<number>) {
	}

	get startIndex(): number {
		return this.fGetEndIndex() - this.fGetLength() + 1;
	}

	get length(): number {
		return this.fGetLength();
	}

	get endIndex(): number {
		return this.fGetEndIndex();
	}
}

export = StartDerrivedSpan;