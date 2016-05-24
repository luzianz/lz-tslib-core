/// <reference path="IEvent.d.ts" />

interface IPropertyChangedEventArgs {
	propertyName: string;
}

interface INotifyPropertyChanged {
	propertyChanged: IEvent<IPropertyChangedEventArgs>;
}