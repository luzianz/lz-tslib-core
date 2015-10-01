/// <reference path="../node_modules/lz-tslib-interfaces/IIterator.d.ts" />
/// <reference path="../node_modules/lz-tslib-interfaces/FFunc.d.ts" />

export function select<I,O>(iterator: IIterator<I>, selector: FFunc<I,O>): IIterator<O> {
	return {
		next: function() {
			var result = iterator.next();
			return {
				value: result.done? undefined : selector(result.value),
				done: result.done
			};
		}
	};
}