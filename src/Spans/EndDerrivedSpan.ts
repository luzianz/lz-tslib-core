/// <reference path="../Interfaces/ISpan.d.ts" />
/// <reference path="../Interfaces/FGetter.d.ts" />

class EndDerrivedSpan implements ISpan {
	
	constructor(
		private fGetStartIndex: FGetter<number>,
		private fGetLength: FGetter<number>) {
	}

	public get startIndex(): number {
		return this.fGetStartIndex();
	}

	public get length(): number {
		return this.fGetLength();
	}

	public get endIndex(): number {
		return this.fGetStartIndex() + this.fGetLength() - 1;
	}
}

export = EndDerrivedSpan;