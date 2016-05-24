/// <reference path="./Interfaces/IValueContainer.d.ts" />
/// <reference path="./Interfaces/INotifyPropertyChanged.d.ts" />
/// <reference path="./Interfaces/IEvent.d.ts" />

import EventInvoker = require('./EventInvoker');

class ValueContainer<T> implements IValueContainer<T>, INotifyPropertyChanged {

	private _propertyChangedInvoker = new EventInvoker<IPropertyChangedEventArgs>();
	
	constructor(private _value: T) {
	}

	public get value(): T {
		return this._value;
	}
	public set value(newValue: T) {
		if (newValue != this._value) {
			this._value = newValue;
			this._propertyChangedInvoker.invoke(this, { propertyName: 'value' });
		}
	}

	public get propertyChanged(): IEvent<IPropertyChangedEventArgs> {
		return this._propertyChangedInvoker.event;
	}
}

export = ValueContainer;