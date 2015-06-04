/// <reference path="../node_modules/lz-tslib-interfaces/ISpan" />

export function isValid(span: ISpan): boolean {
	return span.getEndIndex() > span.getStartIndex();
}

export function isWithin(span: ISpan, index: number): boolean {
	return index >= span.getStartIndex() && index <= span.getEndIndex();
}