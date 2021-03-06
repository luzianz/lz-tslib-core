/// <reference path="../Interfaces/ISpan.d.ts" />

export function isValid(span: ISpan): boolean {
	return span.endIndex > span.startIndex;
}

export function isWithin(span: ISpan, index: number): boolean {
	return index >= span.startIndex && index <= span.endIndex;
}