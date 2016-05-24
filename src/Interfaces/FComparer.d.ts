/**
 * Compare two objects for rank.
 */
interface FComparer<T> {
	/**
	 * @return
	 *     0 if objects are equal.
	 *     1 if a is greater.
	 *     -1 if a is lesser.
	 */
	(a: T, b: T): number;
}