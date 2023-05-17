const max = Math.max(12,30,8,28);
console.log("Max Number = ", max);
const min = Math.min(28,34, 16 ,58);
console.log("min Number =", min);

const numbers = [25, 16, 35 ,46 , 58];
const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(777)
console.log(numbers);
console.log(numbers2);

console.log("Number = ",...numbers);
console.log("max number =", Math.max(...numbers));
console.log("min Number = ", Math.min(...numbers));
