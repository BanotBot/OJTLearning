
// function declaration
function sum(x, y) {
    return x + y;
}

// function expression name
const multiply = function multiply(x, y) {
    return x * y;
}

// arrow function
const divide = (x, y) =>{
    try {
        return x / y;
    } catch (error) {
        return "Error: Division by zero is not allowed";
    }
}

// Using object instantiation to call a functions
const obj = {
    minus(x, y){
        return x - y;
    }
};

const result = sum(5, 10);
console.log("Sum is: " + result);
console.log("Multiplcation is : " + multiply(5, 10));
console.log("Division is : " + divide(50, 10));
console.log("Subtraction is : " + obj.minus(20, 10));