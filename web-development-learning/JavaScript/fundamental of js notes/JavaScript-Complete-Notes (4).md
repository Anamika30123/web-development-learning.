# JavaScript Complete Notes — Beginner to Advanced

A single revision notebook consolidating the topics learned so far, from the first `Hello World` program through scope, closures, and hoisting.

## Contents
1. Introduction and Hello World
2. Strings vs Numbers
3. Variables: `var`, `let`, `const`
4. Declaration and Assignment Terms
5. Data Types and `typeof`
6. BigInt, `null`, `undefined`
7. Operators, Equality, Type Coercion
8. Increment and Decrement
9. Truthy and Falsy
10. Conditions
11. Loops
12. Arrays and Array Methods
13. Strings and String Methods
14. Template Literals
15. Objects
16. Functions
17. Parameters and Arguments
18. Built-in Functions
19. Callbacks and `setTimeout`
20. Scope
21. Closures
22. Hoisting and TDZ
23. Revision Checklist
24. Next Topic: Call Stack (pending)

---

## 1. Introduction and Hello World

JavaScript (JS) is a programming language used to make websites interactive. It can respond to clicks, validate forms, update page content, and fetch data. It runs in browsers and environments such as Node.js.

```javascript
console.log("Hello World");
```
**Output:** `Hello World`

`console.log()` prints a value to the console. Strings can use single or double quotes.

## 2. Strings vs Numbers

A string is text; a number is a numeric value.

```javascript
console.log(typeof "10"); // "string"
console.log(typeof 10);   // "number"

console.log(10 + 5);   // 15
console.log("10" + 5); // "105"
```

`"10"` is text, while `10` is a number. In the last example, `+` joins text and the number after converting the number to a string.

## 3. Variables: `var`, `let`, `const`

A variable is a named binding used to refer to a value.

### `var`
- Can be redeclared and reassigned in the same scope.
- Function-scoped, not block-scoped.
- Older style; avoid in most new code unless working with legacy code.

```javascript
var city = "Pune";
var city = "Mumbai";
city = "Bengaluru";
console.log(city); // Bengaluru
```

### `let`
- Can be reassigned.
- Cannot be redeclared in the same scope.
- Block-scoped.

```javascript
let count = 1;
count = 2;
console.log(count); // 2
```

### `const`
- Must be initialized at declaration.
- Cannot be reassigned or redeclared in the same scope.
- Block-scoped.

```javascript
const country = "India";
// country = "Japan"; // TypeError
```

**Important:** `const` protects the binding, not the contents of an object or array.

```javascript
const hobbies = ["reading", "painting"];
hobbies.push("badminton"); // allowed
// hobbies = []; // not allowed
```

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Redeclare same scope | Yes | No | No |
| Reassign | Yes | Yes | No |
| Must initialize | No | No | Yes |
| Scope | Function/global, not block | Block | Block |

## 4. Declaration, Initialization, Redeclaration, Reassignment

- **Declaration:** create a variable binding — `let score;`
- **Initialization:** give it its first value — `score = 10;`
- **Redeclaration:** declare the same name again in the same scope.
- **Reassignment:** give an existing variable a new value — `score = 20;`

```javascript
let score = 10; // declaration + initialization
score = 20;     // reassignment
console.log(score); // 20
```

## 5. Data Types and `typeof`

JavaScript primitive types:
- `string` — text, e.g. `"Anamika"`
- `number` — integers and decimals, e.g. `21`, `3.14`
- `bigint` — large integers, e.g. `123n`
- `boolean` — `true` or `false`
- `undefined` — missing or not-yet-assigned value
- `null` — intentional absence of a value
- `symbol` — unique identifier

Objects, arrays, and functions are object-related values. Arrays are objects.

```javascript
console.log(typeof "Anamika"); // "string"
console.log(typeof 25);        // "number"
console.log(typeof 25n);       // "bigint"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof {});        // "object"
console.log(typeof []);        // "object"
console.log(typeof function () {}); // "function"
console.log(typeof null);      // "object" (historical quirk)
```

Check for null directly: `value === null`.

## 6. BigInt, `null`, and `undefined`

### BigInt
Represents integers beyond the safe range of the regular `number` type. BigInt literals end with `n`.

```javascript
const huge = 123456789012345678901234567890n;
console.log(typeof huge); // "bigint"
console.log(10n + 20n);   // 30n
// 10n + 5; // TypeError: do not mix BigInt and Number directly
console.log(10n + BigInt(5)); // 15n
```

### `undefined`
Usually means a variable has not been assigned or an object property does not exist.

```javascript
let name;
console.log(name); // undefined
```

A function without an explicit `return` also returns `undefined`.

### `null`
Intentionally represents “no value” or an empty state.

```javascript
const selectedUser = null;
console.log(selectedUser === null); // true
```

| `null` | `undefined` |
|---|---|
| Usually assigned intentionally | Often means missing/not assigned |
| Represents no value | Value is unavailable/unassigned |
| `typeof` gives `"object"` | `typeof` gives `"undefined"` |

## 7. Operators, Equality, and Type Coercion

### Arithmetic operators
- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division
- `%` remainder
- `**` exponentiation

### Comparison operators
`>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==`

### Assignment operators
`=`, `+=`, `-=`, `*=`, `/=`, `%=`

```javascript
let total = 10;
total += 5; // same as total = total + 5
console.log(total); // 15
```

### `==` vs `===`
- `==` (loose equality) may convert types before comparing.
- `===` (strict equality) compares without type conversion.

```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false
console.log(0 == false);  // true
console.log(0 === false); // false
```

Prefer `===` and `!==` for predictable comparisons.

### Type coercion
Type coercion is JavaScript converting a value from one type to another.

```javascript
console.log("10" + 5); // "105"
console.log("10" - 5); // 5
```

## 8. Increment and Decrement

`++` adds one; `--` subtracts one.
- Prefix (`++x`) changes the value first and evaluates to the new value.
- Postfix (`x++`) evaluates to the old value first, then changes it.

```javascript
let x = 5;
console.log(++x); // 6
console.log(x);   // 6

let y = 5;
console.log(y++); // 5
console.log(y);   // 6
```

## 9. Truthy and Falsy

In a Boolean context such as `if`, values behave as truthy or falsy.

**Falsy values:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`. Everything else is truthy.

```javascript
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false
console.log(Boolean(0));       // false
console.log(Boolean("0"));     // true
console.log(Boolean("false")); // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true
console.log(Boolean(null));    // false
```

- `!value` converts to Boolean and reverses it.
- `!!value` converts to the value's Boolean equivalent.

```javascript
console.log(!0);        // true
console.log(!!"hello"); // true
```

**Remember:** Empty arrays and objects are truthy. Non-empty strings such as `"false"` and `"0"` are truthy.

## 10. Conditions

### `if`, `else if`, `else`

```javascript
const marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Passed");
} else {
  console.log("Try again");
}
// Passed
```

### `switch`

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Almost weekend");
    break;
  default:
    console.log("Regular day");
}
```

`break` prevents fall-through; `default` handles unmatched values.

### Ternary operator

```javascript
const age = 20;
const result = age >= 18 ? "Can vote" : "Cannot vote";
console.log(result); // Can vote
```

## 11. Loops

### `for`
Useful when the number of repetitions or counter is known.

```javascript
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

### `while`
Checks the condition before each iteration; it may run zero times.

```javascript
let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}
```

### `do...while`
Runs the body before checking the condition, so it runs at least once.

```javascript
let count = 1;
do {
  console.log(count);
  count++;
} while (count <= 3);
```

### `for...of` vs `for...in`
- `for...of` iterates values from an iterable, such as an array or string.
- `for...in` iterates enumerable property keys, commonly used with objects.

```javascript
const colors = ["red", "blue"];
for (const color of colors) console.log(color);

const person = { name: "Anamika", age: 21 };
for (const key in person) console.log(key, person[key]);
```

`break` exits a loop; `continue` skips to the next iteration. Ensure loop conditions can eventually become false.

## 12. Arrays

An array stores an ordered collection of values. Indexes start at `0`.

```javascript
const fruits = ["apple", "mango", "banana"];
console.log(fruits[0]); // apple
console.log(fruits.length); // 3
```

## 13. Array Methods

### Methods that modify the original
- `push()` adds to the end.
- `pop()` removes from the end.
- `unshift()` adds to the beginning.
- `shift()` removes from the beginning.
- `splice()` changes the array.
- `sort()` sorts the array.
- `reverse()` reverses the array.

### Methods that return results
- `slice(start, end)` returns a shallow copy; end index is excluded.
- `includes(value)` checks whether a value exists.
- `indexOf(value)` returns the first index or `-1`.
- `map(callback)` creates a new array from callback results.
- `filter(callback)` returns items passing a test.
- `find(callback)` returns the first matching item or `undefined`.
- `reduce(callback, initialValue)` combines items into one result.
- `forEach(callback)` runs a callback for each item and returns `undefined`.

```javascript
const nums = [1, 2, 3, 4];
console.log(nums.map(n => n * 2)); // [2, 4, 6, 8]
console.log(nums.filter(n => n > 2)); // [3, 4]
console.log(nums.find(n => n > 2)); // 3
console.log(nums.reduce((sum, n) => sum + n, 0)); // 10
```

### `slice()` vs `splice()`

`slice()` returns a shallow copy and leaves the original unchanged.

```javascript
const a = ["apple", "mango", "banana"];
console.log(a.slice(1, 3)); // ["mango", "banana"]
console.log(a); // original unchanged
```

`splice()` changes the original by removing, replacing, or inserting elements.

```javascript
const b = ["apple", "mango", "banana"];
const removed = b.splice(1, 1);
console.log(removed); // ["mango"]
console.log(b); // ["apple", "banana"]
```

Insert with `splice(start, deleteCount, ...items)`.

## 14. Strings and String Methods

A string is a sequence of characters. Strings are immutable: methods return new strings rather than changing the original.

```javascript
const text = "JavaScript";
console.log(text.length); // 10
console.log(text[0]); // J
```

Common methods:
- `toUpperCase()`, `toLowerCase()`
- `trim()` removes whitespace at both ends.
- `includes(text)` checks whether text is present.
- `indexOf(text)` returns the first matching position or `-1`.
- `slice(start, end)` returns part of a string.
- `replace(old, new)` returns a string with a match replaced.
- `split(separator)` splits a string into an array.

```javascript
const message = "  Hello JavaScript  ";
console.log(message.trim()); // "Hello JavaScript"
console.log("JavaScript".includes("Script")); // true
console.log("a,b,c".split(",")); // ["a", "b", "c"]
```

## 15. Template Literals

Template literals use backticks and `${...}` to insert variables or expressions. They also support multiline strings.

```javascript
const name = "Anamika";
const age = 21;
console.log(`My name is ${name} and I am ${age}.`);
console.log(`2 + 3 = ${2 + 3}`);
```

## 16. Objects

Objects store related information as key-value pairs.

```javascript
const student = {
  name: "Anamika",
  age: 21,
  course: "Computer Engineering"
};

console.log(student.name);   // dot notation
console.log(student["age"]); // bracket notation
student.age = 22;             // update property
student.city = "Pune";        // add property
```

Useful methods:
- `Object.keys(obj)` returns property names.
- `Object.values(obj)` returns property values.
- `Object.entries(obj)` returns key-value pairs.

A `const` object can have its properties changed, but the variable cannot be reassigned to a different object.

## 17. Functions

A function is reusable code that can receive inputs, perform work, and optionally return a result.

### Function declaration

```javascript
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Anamika"));
```

### Function expression

```javascript
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5
```

### Arrow function

```javascript
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12
```

Arrow functions have concise syntax and do not have their own `this` binding.

### Default parameters

```javascript
function welcome(name = "friend") {
  return `Welcome, ${name}!`;
}
console.log(welcome()); // Welcome, friend!
```

## 18. Parameters and Arguments

A **parameter** is a named input in a function definition. An **argument** is the actual value passed when calling the function.

```javascript
function greet(name) { // parameter
  return `Hello, ${name}!`;
}
greet("Anamika"); // argument
```

### `return` vs `console.log()`
- `return` sends a value back to the caller.
- `console.log()` displays a value in the console.
- A function with no explicit return returns `undefined`.

## 19. Built-in Functions

Examples:
- `console.log()` prints to the console.
- `typeof` returns a type string.
- `Number()` converts to a number where possible.
- `String()` converts to a string.
- `Boolean()` converts to Boolean.
- `parseInt()` parses an integer.
- `parseFloat()` parses a decimal number.
- `Math.round()`, `Math.floor()`, `Math.ceil()` perform rounding.
- `Array.isArray(value)` checks whether a value is an array.

```javascript
console.log(Number("25")); // 25
console.log(String(25)); // "25"
console.log(Boolean("hello")); // true
console.log(parseInt("42px")); // 42
console.log(Array.isArray([])); // true
```

## 20. Callbacks and `setTimeout()`

A callback is a function passed to another function so it can be called during that function's work or later.

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
function sayBye() {
  console.log("Goodbye");
}
greet("Anamika", sayBye);
```

`setTimeout(callback, delay)` schedules a callback to run after at least the specified delay in milliseconds. It does not pause the rest of the program.

```javascript
console.log("Start");
setTimeout(() => console.log("After about 1 second"), 1000);
console.log("End");
```

Typical order: `Start`, `End`, then `After about 1 second`. Exact timing varies.

## 21. Scope

Scope means where a variable or function can be accessed.

### Global scope
Top-level declarations are available within their relevant script/module scope. Top-level behavior differs between classic scripts and ES modules.

### Function scope
A `var` declared inside a function is available within that function.

```javascript
function example() {
  var message = "Inside function";
  console.log(message);
}
example();
// console.log(message); // ReferenceError
```

### Block scope
`let` and `const` are limited to the nearest `{}` block; `var` is not block-scoped.

```javascript
if (true) {
  var first = "var";
  let second = "let";
}
console.log(first); // "var"
// console.log(second); // ReferenceError
```

### Lexical scope
A function's access to outer variables depends on where the function is written, not where it is called.

### Scope chain
If a variable is not found in the current scope, JavaScript searches outer scopes until it finds it or reaches the outermost scope.

## 22. Closures

A closure happens when a function remembers and can access variables from the scope where it was created, even after the outer function has finished.

```javascript
function outer() {
  const message = "Hello from outer";
  function inner() {
    console.log(message);
  }
  return inner;
}

const myFunction = outer();
myFunction(); // Hello from outer
```

### Closure counter

```javascript
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

The returned function retains access to `count`, so the value persists between calls.

Closures are useful for preserving state, creating private variables, callbacks, event handlers, and function factories.

## 23. Hoisting and Temporal Dead Zone

**Simple explanation:** Hoisting describes how JavaScript processes declarations during scope setup before normal code execution. It does not literally move source code.

### `var`

```javascript
console.log(score); // undefined
var score = 10;
```

The `var` declaration is initialized to `undefined` during setup; the assignment occurs at its written line.

### `let` and `const`

Their bindings are processed during scope setup, but cannot be accessed before initialization. Accessing them early throws a `ReferenceError`. This period is the **temporal dead zone (TDZ)**.

```javascript
// console.log(age); // ReferenceError
let age = 21;
```

### Function declarations

Function declarations can generally be called before their written position.

```javascript
sayHello(); // Hello!
function sayHello() {
  console.log("Hello!");
}
```

### Function expressions and arrow functions

The variable declaration follows its keyword's rules, but the function value is assigned only at the assignment line. A `var` binding is initially `undefined`; calling it before assignment causes a `TypeError`. With `let` or `const`, early access causes a `ReferenceError`.

## 24. Revision Checklist

- [ ] Print Hello World using `console.log()`.
- [ ] Explain strings vs numbers and `typeof`.
- [ ] Explain `var`, `let`, and `const`.
- [ ] Explain declaration, initialization, redeclaration, reassignment.
- [ ] Name primitive data types.
- [ ] Explain BigInt, `null`, and `undefined`.
- [ ] Explain `==` vs `===` and type coercion.
- [ ] Explain prefix and postfix increment/decrement.
- [ ] List falsy values and give truthy examples.
- [ ] Practise `if`, `else if`, `switch`, and ternary.
- [ ] Practise `for`, `while`, `do...while`, `for...of`, `for...in`.
- [ ] Practise arrays and array methods.
- [ ] Explain `slice()` vs `splice()`.
- [ ] Practise string methods and template literals.
- [ ] Create objects and access properties.
- [ ] Write function declarations, expressions, and arrow functions.
- [ ] Explain parameters, arguments, and `return`.
- [ ] Practise callbacks and `setTimeout()`.
- [ ] Explain global, function, block, and lexical scope.
- [ ] Explain closures with a counter example.
- [ ] Explain hoisting and TDZ.

## Next Topic — Pending: Call Stack and Execution Phases

From your course outline:
1. **Memory Creation Phase:** variables and functions are prepared.
2. **Code Execution Phase:** statements execute.
3. **Call Stack:** tracks function calls using Last In, First Out (LIFO).

Add detailed examples and output questions after completing this lesson.
