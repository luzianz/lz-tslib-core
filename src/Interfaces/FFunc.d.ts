/**
 * General function with an input and output.
 */
interface FFunc<I, O> {
	(input: I): O;
}