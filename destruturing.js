const fish = {
    name:'King hilsa',
    address: 'Chandpur',
    color : 'Silver',
    phone : '01582654857'
}
const phone = fish.phone;
const name = fish.name;
console.log(fish.color);
console.log(phone);
console.log(name);

// Destructuring from an object
const {color} = fish;
console.log(color);

// Or another way
const {age, name1} = {name1: 'Misam', age: 12, proffession : 'Student'}
console.log(name1);

// array destructuring
const [first, second]= [45, 52, 65]
console.log(second);

const nayoks = ['sakib', 'bappa', 'salman'];
const [king, lost, notun] = nayoks;
console.log(lost);

//  function destructuring
function getNames(){
    return ['Abdul Malek', 'Azizur'];
}
const [baba, khalu] = getNames();
console.log("Nambe of Father = ",baba);
console.log("Name of Uncle = ", khalu);
console.log("Both name = ", baba," And " , khalu);
    
 /* Practice Problems 1: 
 1. Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.

 2. Write the following sentence in three lines and print the result:
 I am a web developer . I love to code. I love to eat biryani.

 3. Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

 Practice problem 2:
 1. it will take an array where the array elements will be the name of your friends.
 2. Check if the length of each element is even, push elements with even length to a new array and return the result.

 Practice problem 3:
 1. Write an arrow function where it will do the following:
 a. square each array elements
 b. calculate the sum of the squared elements
 c. Return the average of the sum of the squared elements.

 Practice Problem 4:
 Write an arrow function where it will do the following:
 a. it will take two array inputs
 b. Combine the two arrays and assign them in a new array.
 c. Find the maximum number from the new array and return the result

 COMMON ES6 INTERVIEW QUESTIONS:
 1. WHAT IS ES6: HAVE YOU EVER USED ANYTHING FROM ES6?
 2. Explain the difference between var, let and const
 3. What is the arrow function and how to create it?
 4. Give an example of an Arrow function in ES6> List down its advantages.
 5. Discuss spread operator in ES6 with an example.
 6. What do ou understand about default parameters:
 7. What are template literals in ES6?
 8. Tell us the difference between arrow and regular function.
 */

