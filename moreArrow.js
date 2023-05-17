const add = (first, second) => first + second;

const getFullName = (first, last) => first + ' ' + last;

const multiply = (a, b) => a * b;
const result = multiply(5 , 7);
console.log("result Multiply = ", result);

const addAll = (a, b, c, d,e, f) => a + b + c + d + e  + f;

// No parameter arrow function
const getPie = () => 3.14

// One parameter
const doubleIt = (number) => number * 2;

// One parameter simple version
const fiveTimes = number => number * 5;

// multiline arrow function
// if you want to return something, use the return
const doMath = (x, y, z) =>{
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum + secondSum;
    const result = multiplyResult / 2;
    return result;
}

// Arrow FUNCTION
// Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.

// google search: regular function vs arrow function