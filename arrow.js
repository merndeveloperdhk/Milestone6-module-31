// function declaration
function add(first, second){
    const total = first + second;
    return total;
}
const result = add(20, 15);
console.log(result);

// Another way to write function name function expression.
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}


//  Anonymous function means function expression without function name.
const add2 = function(first, second){
    const total = first + second;
    return total;
}


function add(first, second){
    const total = first + second;
    return total;
}
function add4(first, second){
    return first + second;
}

const add5 = function(first , second){
    return first + second;
}

// arrow function
const add6 = (first, second) => first+ second;
const result6 = add6(12, 11)
console.log("Result six = ", result6);

// Interview question: Difference between function declaration, function expression and arrow function.