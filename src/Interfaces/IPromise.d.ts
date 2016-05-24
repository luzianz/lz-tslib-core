interface IPromise<T> {
	then<N>(onFulfilled?: (result: T) => N | IPromise<N>, onRejected?: (reason: any) => N | IPromise<N>): IPromise<N>;
}