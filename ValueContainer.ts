/// <reference path="node_modules/lz-tslib-interfaces/IValueContainer" />
/// <reference path="node_modules/lz-tslib-interfaces/INotifyValueChanged" />

import ValueChangedEmitter = require('./ValueChangedEmitter');

class ValueContainer<T> extends ValueChangedEmitter<T> implements IValueContainer<T> {
	constructor(private value: T) {
		super();
	}

	getValue(): T {
		return this.value;
	}
	setValue(newValue: T) {
		var oldValue = this.value;
		if (newValue != oldValue) {
			var cancelled = false;
			
			super.onValueChanging(oldValue, newValue, function() {
				cancelled = true;
			});
			
			if (!cancelled) {
				this.value = newValue;
				super.onValueChanged(oldValue, newValue);
			}
		}
	}
}

export = ValueContainer;