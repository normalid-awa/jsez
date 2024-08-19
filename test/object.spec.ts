import { expect, test } from "vitest";
import { isInstantiated } from "../src";

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