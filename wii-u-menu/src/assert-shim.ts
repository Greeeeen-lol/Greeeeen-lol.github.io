/**
 * Lightweight client-side assert shim with node-style API.
 */
function assert(condition: any, message?: string | Error): asserts condition {
  if (!condition) {
    throw message instanceof Error
      ? message
      : new Error(message || "Assertion failed");
  }
}

namespace assert {
  export function ok(value: any, message?: string | Error): asserts value {
    assert(value, message);
  }

  export function strictEqual(actual: any, expected: any, message?: string | Error): void {
    if (actual !== expected) {
      throw message instanceof Error
        ? message
        : new Error(message || `Expected ${String(actual)} to strictly equal ${String(expected)}`);
    }
  }

  export function fail(message?: string | Error): never {
    throw message instanceof Error ? message : new Error(message || "Failed");
  }
}

export default assert;
