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
    

