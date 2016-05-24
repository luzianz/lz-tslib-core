/// <reference path="IIterator.d.ts" />

interface IIterable<T> {
	'Symbol.iterator'(): IIterator<T>;
}