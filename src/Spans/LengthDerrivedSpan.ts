/// <reference path="../Interfaces/ISpan.d.ts" />
/// <reference path="../Interfaces/FGetter.d.ts" />

class LengthDerrivedSpan implements ISpan {
	
	constructor(
		protected fGetStartIndex: FGetter<number>,
		protected fGetEndIndex: FGetter<number>) {
	}

	public get startIndex(): number {
		return this.fGetStartIndex();
	}

	public get length(): number {
		return this.fGetEndIndex() - this.fGetStartIndex();
	}

	public get endIndex(): number {
		return this.fGetEndIndex();
	}
}

export = LengthDerrivedSpan;