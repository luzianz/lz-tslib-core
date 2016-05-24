/// <reference path="../Interfaces/ISpan.d.ts" />
/// <reference path="../Interfaces/FGetter.d.ts" />

class StartDerrivedSpan implements ISpan {
	
	constructor(
		private fGetEndIndex: FGetter<number>,
		private fGetLength: FGetter<number>) {
	}

	public get startIndex(): number {
		return this.fGetEndIndex() - this.fGetLength() + 1;
	}

	public get length(): number {
		return this.fGetLength();
	}

	public get endIndex(): number {
		return this.fGetEndIndex();
	}
}

export = StartDerrivedSpan;