/// <reference path="IPromise.d.ts" />

/**
 * Represents an object which needs to load resources via I/O (network, file system, etc.)
 */
interface ILoadable {
	/** Load resources. */
	Load(): IPromise<void>;
}