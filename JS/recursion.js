// 1.
// function add () {
//     console.log('calling');
//     add();
// }
// add();

// Recursion is used to breakdown the problems(means reduce the problem size into smaller chunks). This approach is known as divide & conquer approach.
// Recursion is mostly used tree based data structures.
// Recursion is good for time complexity but not for space complexity.
// Let's take an example to see how recursion works...
// arr = [1,5,6,4,3,8,9,7]
// Step1: [1,5,6,4] [3,8,9,7]
// Step2: [1,5] [6,4] [3,8] [9,7]
// Step3: [1,5] [4,6] [3,8] [7,9]
// Step4: [1,4,5,6] [3,7,8,9]
// Step5: [1,3,4,5,6,7,8,9]
// Using for loop, this problem takes 8(elements)*7(1 element compares with 7 other elements) = 56 steps but using recursion it is taking only 13 steps.

// Every recursion program should start with base condition.
// Ques:- Find factorial of a number.
function getFactorial(num) {
    if(num === 1){
        return 1;
    }
    return num * getFactorial(num-1);
}
console.log(getFactorial(5));
