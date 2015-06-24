/// <reference path="typings/lz-tslib-interfaces/index.d.ts" />

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