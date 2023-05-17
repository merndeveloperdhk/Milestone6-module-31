function add(first, second){
    second = second || 0;
    // if(second === undefined){
    //     second = 0;
    // }
    const total = first + second;
    return total;
}
const result = add(25)
console.log("Total sum = ",result);

function sum(first, second){
    const total = first + second;
    return total
}
const result1 = sum(20, 15);
console.log(result1);

function multiply(first, second){
    const multiply = first * second;
    return multiply;
}
const multiplyResult = multiply(5,7)
console.log(multiplyResult);


const squared = (sum1, sum2) =>{
    const square1 = Math.square(2,5);
    return square1;
}