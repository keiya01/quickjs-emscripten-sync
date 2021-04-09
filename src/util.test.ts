import { isES2015Class, isObject, complexity } from "./util";

it("isES2015Class", () => {
  expect(isES2015Class(class {})).toBe(true);
  expect(isES2015Class(class A {})).toBe(true);
  expect(isES2015Class(function() {})).toBe(false);
  expect(isES2015Class(function A() {})).toBe(false);
  expect(isES2015Class(() => {})).toBe(false);
  expect(isES2015Class({})).toBe(false);
  expect(isES2015Class(1)).toBe(false);
  expect(isES2015Class(true)).toBe(false);
});

it("isObject", () => {
  expect(isObject({})).toBe(true);
  expect(isObject(Object.create(null))).toBe(true);
  expect(isObject(function() {})).toBe(true);
  expect(isObject(function A() {})).toBe(true);
  expect(isObject(() => {})).toBe(true);
  expect(isObject(class {})).toBe(true);
  expect(isObject(class A {})).toBe(true);
  expect(isObject(null)).toBe(false);
  expect(isObject(1)).toBe(false);
  expect(isObject(true)).toBe(false);
});

it("complexity", () => {
  expect(complexity(0)).toBe(0);
  expect(complexity(NaN)).toBe(0);
  expect(complexity(true)).toBe(0);
  expect(complexity(false)).toBe(0);
  expect(complexity(null)).toBe(0);
  expect(complexity(undefined)).toBe(0);
  expect(complexity([])).toBe(1);
  expect(complexity({})).toBe(1);
  expect(complexity({ a: 1 })).toBe(1);
  expect(complexity(() => {})).toBe(1);
  expect(complexity([{}])).toBe(2);
  expect(complexity(function() {})).toBe(2);
  expect(complexity(class {})).toBe(2);
  expect(complexity({ a: {} })).toBe(2);
});
