/// <reference path="../../node_modules/lz-tslib-interfaces/IIterator.d.ts" />
/// <reference path="../../node_modules/lz-tslib-interfaces/FPredicate.d.ts" />
/// <reference path="../../node_modules/lz-tslib-interfaces/FFunc.d.ts" />

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

export function where<T>(iterator: IIterator<T>, predicate: FPredicate<T>): IIterator<T> {
	return {
		next: function() {
			var result: {value?: T, done: boolean};
			
			while(true) {
				result = iterator.next();
				if (result.done || predicate(result.value)) {
					break;
				}
			}
			
			return {
				value: result.done? undefined : result.value,
				done: result.done
			};
		}
	};
}

export function first<T>(iterator: IIterator<T>, predicate: FPredicate<T>): T {
	var item: T;
	var result: {value?: T, done: boolean};
	
	while (true) {
		result = iterator.next();
		if (result.done) {
			break;
		} else if (predicate(result.value)) {
			item = result.value;
			break;
		}
	}
	
	return item;
}