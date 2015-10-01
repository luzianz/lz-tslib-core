/// <reference path="node_modules/lz-tslib-interfaces/FAction.d.ts" />
/// <reference path="node_modules/lz-tslib-interfaces/FGetter.d.ts" />
/// <reference path="node_modules/lz-tslib-interfaces/FFunc.d.ts" />
/// <reference path="node_modules/lz-tslib-interfaces/FPredicate.d.ts" />
/// <reference path="node_modules/lz-tslib-interfaces/FAggregator.d.ts" />
/// <reference path="node_modules/lz-tslib-interfaces/ISpan.d.ts" />
/// <reference path="node_modules/lz-tslib-interfaces/IIterator.d.ts" />
/// <reference path="node_modules/lz-tslib-interfaces/IDisposable.d.ts" />

declare module 'lz-tslib-core' {
	export class CompositeDisposer {
		add(disposable: IDisposable): void;
		dispose(): void;
	}
	export class DelegateDisposer {
		constructor(onDispose: FAction);
		dispose(): void;
	}
	export class EventEmitter {
		protected emit(event: string, args: IArguments);
		on(event: string, callback: Function);
	}
	export class Lazy<T> {
		constructor(getter: FGetter<T>);
		value: T;
	}
	export class ValueChangedEmitter<T> extends EventEmitter {
		protected onValueChanged();
		protected onValueChanging(oldValue: T, newValue: T, cancel?: FAction);
	}
	
	export module Spans {
		export class StartDerrivedSpan {
			constructor(fGetEndIndex: FGetter<number>, fGetLength: FGetter<number>);
			startIndex: number;
			length: number;
			endIndex: number;
		}
		export class EndDerrivedSpan {
			constructor(fGetStartIndex: FGetter<number>, fGetLength: FGetter<number>);
			startIndex: number;
			length: number;
			endIndex: number;
		}
		export class LengthDerrivedSpan implements ISpan {
			constructor(fGetStartIndex: FGetter<number>, fGetEndIndex: FGetter<number>);
			startIndex: number;
			length: number;
			endIndex: number;
		}
		export class TrimmableSpan {
			constructor(fGetStartIndex: FGetter<number>, fGetEndIndex: FGetter<number>);
			addLeftTrim(span: ISpan): void;
			addRightTrim(span: ISpan): void;
			startIndex: number;
			length: number;
			endIndex: number;
		}
		export module Extensions {
			export function isValid(span: ISpan): boolean;
			export function isWithin(span: ISpan, index: number): boolean;
		}
	}
	
	export module Iterable {
		export module Extensions {
			export function select<I,O>(iterator: IIterator<I>, selector: FFunc<I,O>): IIterator<O>;
			export function where<T>(iterator: IIterator<T>, predicate: FPredicate<T>): IIterator<T>;
			export function first<T>(iterator: IIterator<T>, predicate: FPredicate<T>): T;
		}
	}
	
	export module Array {
		export module Extensions {
			export function remove<T>(array: Array<T>, matchPredicate: FPredicate<T>);
			export function select<T, P>(array: Array<T>, propertySelector: FFunc<T, P>): Array<P>;
			export function aggregate<T>(array: Array<T>, aggregator: FAggregator<T>): T;
		}
	}
}