/// <reference path="../Interfaces/ISpan.d.ts" />
/// <reference path="../Interfaces/FGetter.d.ts" />

import LengthDerrivedSpan = require('./LengthDerrivedSpan');
import ArrayExt = require('../Array/Extensions');

class TrimmableSpan extends LengthDerrivedSpan {
	
	private leftSpans: ISpan[];
	private rightSpans: ISpan[];

	constructor(
		fGetStartIndex: FGetter<number>,
		fGetEndIndex: FGetter<number>) {

		super(fGetStartIndex, fGetEndIndex);

		this.leftSpans = [];
		this.rightSpans = [];
	}

	public addLeftTrim(span: ISpan) {
		this.leftSpans.push(span);
	}

	public addRightTrim(span: ISpan) {
		this.rightSpans.push(span);
	}

	public get startIndex(): number {
		var sti = this.leftTrimIndex + 1;
		var si = this.fGetStartIndex();

		return sti > si ? sti : si;
	}

	public get endIndex(): number {
		var eti = this.rightTrimIndex - 1;
		var ei = this.fGetEndIndex();

		return eti < ei ? eti : ei;
	}

	private get leftTrimIndex(): number {
		var endIndices = ArrayExt.select(this.leftSpans, span => span.endIndex);
		return ArrayExt.aggregate(endIndices, highestNumber);
	}

	private get rightTrimIndex(): number {
		var startIndices = ArrayExt.select(this.rightSpans, span => span.startIndex);
		return ArrayExt.aggregate(startIndices, lowestNumber);
	}
}

function lowestNumber(a: number, b: number): number {
	return a < b ? a : b;
}

function highestNumber(a: number, b: number): number {
	return a > b ? a : b;
}

export = TrimmableSpan;