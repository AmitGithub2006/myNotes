// 1.
// function add () {
//     console.log('calling');
//     add();
// }
// add();

// Recursion is used to breakdown the problems(means reduce the problem size into smaller chunks). This approach is known as divide & conquer approach.
// Recursion is mostly used in tree based data structures.
// Recursion is good for time complexity but not for space complexity.
// Let's take an example to see how recursion works...
// arr = [1,5,6,4,3,8,9,7]
// Step1: [1,5,6,4] [3,8,9,7]
// Step2: [1,5] [6,4] [3,8] [9,7]
// Step3: [1,5] [4,6] [3,8] [7,9]
// Step4: [1,4,5,6] [3,7,8,9]
// Step5: [1,3,4,5,6,7,8,9]
// Using for loop, this problem takes 8(elements)*7(1 element compares with 7 other elements) = 56 steps but using recursion it is taking only 13 steps.

// Every recursion program should start with
// (i) base condition
// (ii) error condition(may come or not)
// (iii) actual code

// Ques:- Find factorial of a number.
// function getFactorial(num) {
//     if(num < 0){
//         return -1;
//     }
//     if(num === 1 || num === 0){
//         return 1;
//     }
//     return num * getFactorial(num-1);
// }
// console.log(getFactorial(5));

// Ques:- Find sum of elements of an array.
// function findSum(arr) {
//     if(arr.length === 0) return -1;
//     if(arr.length === 1){
//         return arr[0];
//     }
//     let firstElement = arr.shift(); // we can use 'pop' in place of 'shift'.
//     return firstElement + findSum(arr);
// }
// console.log(findSum([1,2,3]));
// To find product of elements, we need to replace '*' with '+'.

// Ques:- Find sum of numbers within the given range.
// function getSumOfRange(first, last) {
//     if(first === last) return 0;
//     return first + getSumOfRange(first + 1, last);
// }
// console.log(getSumOfRange(1,5));

// Ques:- Find power of a number.
// function getPower(base, exponential){
//     if(exponential === 0) return 1;
//     return base * getPower(base, exponential-1);
// }
// console.log(getPower(2,4));

// Ques:- Flatten the array.
// function flatten(arr){
//     let flattenedArray = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])) {
//         flattenedArray = [...flattenedArray, ...flatten(arr[i])];
//         } else {
//             flattenedArray.push(arr[i]);
//         }
//     }
//     return flattenedArray;
// }
// let arr = [10, [1,2,3], [], [5,3, [2]]]
// console.log(flatten(arr));

// Ques:- Selection sort.
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = arr[i];
//         for (let j = i + 1; j < arr.length; j++) {
//             if(arr[j] < min) {
//                 min = arr[j];
//             }
//         }
//         let minIndex = arr.indexOf(min);
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
//     return arr;
// }
// console.log(selectionSort([6,7,1,3,4,8,2]))

// Ques:- Bubble sort.
// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             if(arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([6,7,1,3,4,8,2]))