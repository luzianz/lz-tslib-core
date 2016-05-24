interface IIterator<T> {
	next(): {
		value?: T, done: boolean
	};
}