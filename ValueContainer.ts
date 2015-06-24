/// <reference path="typings/lz-tslib-interfaces/index.d.ts" />

import ValueChangedEmitter = require('./ValueChangedEmitter');

class ValueContainer<T> extends ValueChangedEmitter<T> implements IValueContainer<T> {
	constructor(private _value: T) {
		super();
	}

	get value(): T {
		return this._value;
	}
	set value(newValue: T) {
		var oldValue = this._value;
		if (newValue != oldValue) {
			var cancelled = false;
			
			super.onValueChanging(oldValue, newValue, function() {
				cancelled = true;
			});
			
			if (!cancelled) {
				this._value = newValue;
				super.onValueChanged(oldValue, newValue);
			}
		}
	}
}

export = ValueContainer;