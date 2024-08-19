export function isInstantiated(obj: any): boolean {
	return typeof obj.prototype === "undefined";
}