interface FEventHandler<TArgs> {
	(sender: any, args: TArgs): void;
}

interface IEvent<TArgs> {
	addHandler(handler: FEventHandler<TArgs>);
	removeHandler(handler: FEventHandler<TArgs>);
}