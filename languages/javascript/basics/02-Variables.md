# Variables

## Data Types

Variables are pointers to data, which just refers to anything meaningful to a computer. In JavaScript, there are nine data types:

- Primitve types: Data that is not an object and has no functions
  - `undefined`: `undefined` refers to variable that has been declared but not assigned a value yet. Do not manually set values to `undefined`. Mathematical operations on an `undefined` variable result in `NaN`.
  - `Boolean`: `Boolean` values store one of two states: `true` or `false`.
  - `null`: `null` is assigned to a variable as the representation of no value. `typeof null === "object"`
  - `String`: A `String` is a sequence od characters that represents a piece of text or a word.
  - `Number`: `Number`s can store integers, floats, and number representations, such as `Infinity` or `NaN` (not a number).
  - `BigInt`: `BigInt`s can store integers with arbitrary precision beyond the normal same integer range for `Number`s. A `BigInt` is formed by adding `n` to the end of a number, e.g, `9007199254740993n`.
- `Symbol`: A `Symbol` represents a unique identifier. `Symbols` are created values that programs can use as property keys without risk of a name collision. Even when `Symbol`s are initiated with the same value, they are completely unique.
- `Object`: An `Object` is a structural non-data type that represents a constructed instance of an `Object`. `Object`s store data that can be accessed via named properties.
- `Function`: A `Function` is derived from the `Object` constructor, but is a separate type because `typeof myFunction === "function"`

```javascript
// Primitive types

// undefined
undefined;

typeof undefined; // 'undefined'

// Boolean
true;
false;

typeof true; // 'boolean'

// null
null;

typeof null;
// 'object' - this is widely regarded as a mistake that has never been corrected

// String
("Hello World");

typeof "abc"; // 'string'

// Number
1.5;
1;

typeof 1; // 'number'
typeof Infinity; // 'number'
typeof NaN; // 'number'

// BigInt
1n;
2n;

typeof 1n; // 'bigint'

// Symbol
Symbol("a");

typeof Symbol("a"); // 'symbol'

Symbol("a") === Symbol("a"); // false - Symbols are ALWAYS UNIQUE

// Object

// object literal
const computer = {
  os: "linux",
  screenResolution: "1420x1080",
};

typeof computer; // 'object'

// instances
const arr = new Array(3);

typeof arr; // 'object'

// builtin objects

typeof Math; // 'object'

// Functions
const product = new Function("a", "b", "return a * b");

typeof product; // 'function'
```

_[variables.js](code/variables.js)_

## Variable Declaration

In JavaScript, there are three variable declaration keywords: `let`, `const`, and `var`.

- `var`s can be overwritten via declaration without an error and can be reassigned, and the scope of `var` is either global or local within a function.
- `let` declares a variable that cannot be overwritten via declaration (throws an error) but can be reassigned, and the scope of a var is limited to block, statement, or expression.
- `const` declares a variable that is immutable: it cannot be changed. In all other respects, const is identical to `let`.

ES6 forward, it is best practice to use `let` and `const` and avoid `var` unless you have a specific reason to (which would be rare and most likely a niche use).

```javascript
// Overwriting via declaration

var num1 = 1;
var num1 = 2; // no error

num1 = 1; // no error

let num2 = 1;
let num2 = 2; // throws an error

num2 = 2; // no error

const num3 = 1;
const num3 = 2; // throws an error

num3 = 2; // throws an error

// Scope

for (var i = 0; i <= 3; i++) {
  i += 0;
}

print(i); // prints 3

for (let i = 0; i <= 3; i++) {
  i += 0;
}

print(i); // throws an error, i is not defined outside of the for loop expression
```

_[variables.js](code/variables.js)_
