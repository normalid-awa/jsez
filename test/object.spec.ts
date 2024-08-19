import { expect, test } from "vitest";
import {
	getInstanceKeys,
	getInstanceMethodsKeys,
	getInstancePropertyKeys,
	getStaticKeys,
	getStaticMethodKeys,
	getStaticPropertyKeys,
	isInstantiated,
} from "../src";

class T {
	public static a = 1;
	public static b() {
		return this.a;
	}
	public static c = () => {
		return this.b();
	};

	private static d = 2;
	private static e() {
		return this.d;
	}
	private static f = () => {
		return this.e();
	};

	public g = 3;
	public h() {
		return this.g;
	}
	public i = () => {
		return this.h();
	};

	private j = 4;
	private k() {
		return this.j;
	}
	private l = () => {
		return this.k();
	};
}

test("Test isInstance", () => {
	expect(isInstantiated(T)).toBe(false);
	expect(isInstantiated(new T())).toBe(true);
});

test("Test getStaticKeys", () => {
	expect(getStaticKeys(T).sort()).toEqual(
		["a", "b", "c", "d", "e", "f"].sort()
	);
});

test("Test getStaticPropertyKeys", () => {
	expect(getStaticPropertyKeys(T).sort()).toEqual(
		["a", "c", "d", "f"].sort()
	);
});

test("Test getStaticMethodKeys", () => {
	expect(getStaticMethodKeys(T).sort()).toEqual(
		["b", "e"].sort()
	);
});

test("Test getInstanceMethodsKeys", () => {
	expect(getInstanceMethodsKeys(new T()).sort()).toEqual(
		["constructor", "h", "k"].sort()
	);
});

test("Test getInstancePropertiesKeys", () => {
	expect(getInstancePropertyKeys(new T()).sort()).toEqual(
		["g", "i", "j", "l"].sort()
	);
});

test("Test getInstanceKeys", () => {
	expect(getInstanceKeys(new T()).sort()).toEqual(
		["constructor", "g", "h", "i", "j", "k", "l"].sort()
	);
});
