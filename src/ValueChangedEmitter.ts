/// <reference path="../node_modules/lz-tslib-interfaces/FAction.d.ts" />
/// <reference path="../node_modules/lz-tslib-interfaces/INotifyPropertyChanged.d.ts" />
/// <reference path="../node_modules/lz-tslib-interfaces/INotifyPropertyChanging.d.ts" />

import EventEmitter = require('./EventEmitter');

class ValueChangedEmitter<T> extends EventEmitter implements INotifyPropertyChanged, INotifyPropertyChanging {
	protected onValueChanged() {
		this.onPropertyChanged('value');
	}
	
	protected onValueChanging(oldValue: T, newValue: T, cancel?: FAction) {
		this.onPropertyChanging('value', oldValue, newValue, cancel);
	}
	
	private onPropertyChanged(propertyName: string) {
		this.emit('propertyChanged', arguments);
	}
	
	private onPropertyChanging(propertyName: string, oldValue: T, newValue: T, cancel?: FAction) {
		this.emit('propertyChanging', arguments);
	}
}

export = ValueChangedEmitter;