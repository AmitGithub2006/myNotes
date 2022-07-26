// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

// JavaScript Declarations are Hoisted.
// In JavaScript, a variable can be declared after it has been used.
// In other words, a variable can be used before it has been declared.
// Example:
// (i)
// x = 5;
// console.log(x);
// var x;

// (ii)
// var x;
// x = 5;
// console.log(x);

// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a let variable before it is declared will result in a ReferenceError.
// The variable is in a "temporal dead zone" from the start of the block until it is declared.
// Example:
// (i)
// x = 5;
// console.log(x);
// let x;

// (ii)
// x = 5;
// console.log(x);
// const x;

// JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations
// Example:
// (i)
// var x = 5;
// var y = 7;
// console.log(x, y);

// (ii)
// var x = 5;
// console.log(x, y);
// var y = 7;
// This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.
// Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.
// Example:
// var x = 5;
// var y;
// console.log(x, y);
// y = 7;