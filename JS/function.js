//1.
// (i)function declaration -> using function keyword.
// function log(){
//     console.log('declaration logging');
// }
// log();

//(ii)(a) named function expression (not useful)
// let printing = function amit() {
//     console.log('expression logging')
// }
// printing();

// (b) anonymous function expression
// let printing = function () {
//     console.log('expression logging')
// }
// printing();

//2.
// (i)
// log();
// function log(){
//     console.log('declaration logging');
// }
// We can call the 'log()' before function declaration also, this property is called hoisting.
// When we do function declaration, it is hoisted.(Hoisted means it will work)
// Here, in memory creation phase, function gets stored.

// (ii)
// printing();
// let printing = function () {
//     console.log('expression logging')
// }
// Function expression are not hoisted.(In memory creation phase, the value of a variable(here printing) is undefined)

//3. arguments in function
// function add(num1, num2) {
//     console.log(arguments);
//     return num1 + num2;
// }
// console.log(add(5,10));
// num1 & num2 are arguments and 5 & 10 are parameters.

//Extra parameters
// function add(num1, num2) {
//     return num1 + num2;
// }
// console.log(add(5,10,20));
// If we pass extra values, javascript ignores them.

//Extra arguments
// function add(num1, num2, num3) {
//     return num1 + num2;
// }
// console.log(add(5,10));
// If we don't pass any value, it is considered as undefined.

// function add(num1, num2, num3, num4) {
//     console.log(num1, num2, num3, num4);
//     return num1 + num3;
// }
// console.log(add(5,10));

// 4. rest operator
// (i)
// function shoppingCart (prices){
//     let total = 0;
//     for(let i = 0; i < prices.length; i++){
//         total += prices[i];
//     }
//     console.log(total);
// }
// shoppingCart([100,150]);

// (ii)
// function shoppingCart (prices){
//     let total = 0;
//     for(let i = 0; i < prices.length; i++){
//         total += prices[i];
//     }
//     console.log(total);
// }
// shoppingCart(100,150);
// In starting, the value of prices will be 100 and prices.length i.e 100.length is nothing so for loop won't execute so it will give 'total' as it is.(to remove this issue, we use rest operator)

// (iii)
// function shoppingCart (...prices){
//     let total = 0;
//     for(let i = 0; i < prices.length; i++){
//         total += prices[i];
//     }
//     console.log(total);
// }
// shoppingCart(100,150);
// Spread operator pushes numbers into an array.

// (iv)
// function shoppingCart (discount,...prices){
//     let total = 0;
//     for(let i = 0; i < prices.length; i++){
//         total += prices[i];
//     }
//     console.log(total);
// }
// shoppingCart(5,100,150,250);

// (v)
// function shoppingCart (discount,...prices, coupon){
//     console.log(discount,prices,coupon);
//     let total = 0;
//     for(let i = 0; i < prices.length; i++){
//         total += prices[i];
//     }
//     console.log(total);
// }
// shoppingCart(5,100,150,200,100);
// Rest operator should be used at last. That's it is called rest operator.

// (vi)
// function shoppingCart (discount,coupon,...prices){
//     console.log(discount,prices,coupon);
//     let total = 0;
//     for(let i = 0; i < prices.length; i++){
//         total += prices[i];
//     }
//     console.log(total);
// }
// shoppingCart(5,100,150,200,100);

// 5. default values
// (i)
// function areaOfRectangle(length, breadth) {
//     return length * breadth;
// }
// console.log(areaOfRectangle(5,10));

// (ii)
// function areaOfRectangle(length, breadth) {
//     return length * breadth;
// }
// console.log(areaOfRectangle(5));

// (iii)
// function areaOfRectangle(length, breadth) {
//     length = length || 1;
//     breadth = breadth || 1;
//     return length * breadth;
// }
// console.log(areaOfRectangle());
// console.log(areaOfRectangle(4));
// This method is used before 'default values'.

// console.log(undefined || 5);
// console.log(null || 5);
// console.log(10 || 5);

// (iii)
// function areaOfRectangle(length = 1, breadth = 1) {
//     return length * breadth;
// }
// console.log(areaOfRectangle(5,10));
// console.log(areaOfRectangle(5));
// console.log(areaOfRectangle());