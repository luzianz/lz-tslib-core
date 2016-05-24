/**
 * Determines whether the subject meets the criteria the predicate represents.
 */
interface FPredicate<T> {
	(subject: T): boolean;
}