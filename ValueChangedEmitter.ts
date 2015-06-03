/// <reference path="node_modules/lz-tslib-interfaces/IValueContainer" />
/// <reference path="node_modules/lz-tslib-interfaces/INotifyValueChanged" />

import EventEmitter = require('./EventEmitter');

class ValueChangedEmitter<T> extends EventEmitter implements INotifyValueChanged<T> {
	protected onValueChanged(oldValue: T, newValue: T) {
		this.emit('valueChanged', arguments);
	}
	
	protected onValueChanging(oldValue: T, newValue: T, cancel?: FAction) {
		this.emit('valueChanging', arguments);
	}
}

export = ValueChangedEmitter;