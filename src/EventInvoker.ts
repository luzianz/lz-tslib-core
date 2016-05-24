/// <reference path="./Interfaces/IEvent.d.ts" />

import Lazy = require('./Lazy');

class EventInvoker<TArgs> {

	private _handlers: Set<FEventHandler<TArgs>>;
	private _eventLazy: Lazy<IEvent<TArgs>>;
	
	constructor() {
		this._handlers = new Set<FEventHandler<TArgs>>();
		this._eventLazy = new Lazy<IEvent<TArgs>>(() => {
			return {
				addHandler: (handler) => this._handlers.add(handler),
				removeHandler: (handler) => this._handlers.delete(handler)
			};
		});
	}
	
	public get event(): IEvent<TArgs> {
		return this._eventLazy.value;
	}

	public invoke(sender: any, args: TArgs) {
		this._handlers.forEach(element => element(sender, args));
	}
}

export = EventInvoker;