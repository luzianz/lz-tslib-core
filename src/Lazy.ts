/// <reference path="./Interfaces/IValueContainer.d.ts" />

class Lazy<T> implements IValueContainer<T> {
	
	private _hasValue = false;
	private _value: T;
	
	constructor(private _getter: () => T) { }

	public get value(): T {
		if (!this._hasValue) {
			this._value = this._getter();
			this._getter = null;
			this._hasValue = true;
		}

		return this._value;
	}
}

export = Lazy;