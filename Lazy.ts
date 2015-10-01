/// <reference path="node_modules/lz-tslib-interfaces/IValueContainer.d.ts" />

class Lazy<T> implements IValueContainer<T>{
	private hasValue = false;
	private _value: T;
	
	constructor(private getter: () => T) { }

	public get value(): T {
		if (!this.hasValue) {
			this._value = this.getter();
			this.hasValue = true;
		}

		return this._value;
	}
}

export = Lazy;