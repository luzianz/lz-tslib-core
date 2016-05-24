interface IObserver<T> {
	next(value: T): void;
	done(): void;
	error(error: any): void;
}