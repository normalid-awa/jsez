var getDefaultClassPropertyKeys = function (): string[] {
	const DEFAULT_CLASS = Object.getOwnPropertyNames(class {});
	console.log("daw");
	getDefaultClassPropertyKeys = () => DEFAULT_CLASS;
	return getDefaultClassPropertyKeys();
};

/**
 * Check if an object is instantiated
 * @param obj The object to check.
 * @returns True if the object is instantiated
 */
export function isInstantiated(obj: any): boolean {
	return typeof obj.prototype === "undefined";
}

export function assertObjectIsInstantiated(obj: any): asserts obj is Object {
	if (!isInstantiated(obj))
		throw new Error("Object is not instantiated");
}

/**
 * Return all static keys of an object including private, protected and public
 * @param obj The object to get the keys of.
 * @returns
 */
export var getStaticKeys = function (obj: Object): string[] {
	getStaticKeys = function (obj: Object) {
		return Object.getOwnPropertyNames(obj).filter(
			(k) => !getDefaultClassPropertyKeys().includes(k)
		);
	};

	return getStaticKeys(obj);
};

/**
 * Return all property keys of an object including private, protected and public
 * @param obj The object to get the keys of.
 * @returns
 */
export function getStaticPropertyKeys(obj: Object): string[] {
	return Object.getOwnPropertyNames(obj).filter(
		(v) => Object.getOwnPropertyDescriptor(obj, v)?.enumerable == true
	);
}

export var getStaticMethodKeys = function (obj: Object): string[] {
	return Object.getOwnPropertyNames(obj).filter(
		(v) =>
			Object.getOwnPropertyDescriptor(obj, v)?.enumerable == false &&
			!getDefaultClassPropertyKeys().includes(v)
	);
};

/**
 * Return all method keys of an instance including private, protected and public
 * @param obj The object to get the keys of.
 * @returns
 */
export function getInstanceMethodsKeys(obj: Object): string[] {
	assertObjectIsInstantiated(obj);
	return Object.getOwnPropertyNames(Object.getPrototypeOf(obj)).filter(
		(m) => typeof (obj as { [key: string]: unknown })[m] === "function"
	);
}
/**
 * Return all propertype keys of an instance including private, protected and public
 * @param obj The object to get the keys of.
 * @returns
 */
export function getInstancePropertyKeys(obj: Object): string[] {
	assertObjectIsInstantiated(obj);
	return Object.getOwnPropertyNames(obj);
}

/**
 * Return all property and method keys in an instance including private, protected and public
 * @param obj The object to get the keys of.
 * @returns
 */
export function getInstanceKeys(obj: Object): string[] {
	assertObjectIsInstantiated(obj);
	return getInstancePropertyKeys(obj).concat(getInstanceMethodsKeys(obj));
}
