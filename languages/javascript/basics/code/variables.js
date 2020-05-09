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

// ---------------------------------------------------------------------------- //

// let, const, var

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
