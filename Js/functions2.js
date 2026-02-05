
// Function Declaration
// Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
console.log(greet(" Alice")); // Hello Alice! - function declaration are okay to be called before they are defined
function greet(name) { return "Hello" + name + "!"; }


// Function Expression
/***
 *  A function expression stores a function inside a variable.
    The function can be anonymous (without a name).
    Function expressions are executed only when the code reaches them.
    Function are not hoisted, so calling them before the definition will result in an error.
*/

const farewell = function(name) {return "Goodbye" + name + "!"; };
console.log(farewell(" Bob")); 

// call() methods - this is use to call the function with a given value in the objects
const person1 = { firstName: "John", lastName: "Doe" };
const person2 = { firstName: "Mary", lastName: "Smith" };

function fullName(greeting) {
    return greeting + " " + this.firstName + " " + this.lastName;
}

console.log(fullName.call(person1, "Hello"));

/*
    The Difference Between call() and apply()
    The only difference between apply() and call() is how arguments are passed.
    The call() method takes arguments separately.
    The apply() method takes arguments as an array.
    call() method and the apply() method runs the function immediately.
*/

// apply() method - this is use to call the function with a given value in the objects, but the parameters are passed as an array
// Using apply() when call() is Simpler
// If you do not have an array, call() is often clearer.
console.log(fullName.apply(person2, ["Hi"]));

// function kapeMessage(coffeeType) {
//     return "I like " + coffeeType + " coffee, said " + this.firstName;
// }

// console.log(kapeMessage.apply(person1, ["Latte"]));
// bind() method does not run the function immediately. It returns a new function, so you can store it in a variable and execute it later.
const greetPerson1 = fullName.bind(person1, "Hello");
console.log(greetPerson1()); // Hello John Doe
// console.log(kapeMessage.bind(person2, "Espresso")); // I like Espresso coffee, said Mary

