/*
    ARROW FUNCTIONS
        - arrow functions, also commonly referred to as fat arrow functions, are basically a more concise way to write a function expression - not a function declaration
            - function expressions do NOT get hoisted, unlike function declarations
*/
// BLOCK BODY ARROW FUNCTION
let hello = () => { // any parameters that your function may hold, will go inside of the set of paretheses
    console.log('Hello world');
}
hello();
// regular function expression
let hello = function () {
}
// CONCISE BODY ARROW FUNCTION
let hello = () => console.log('Hello world');
hello();
/*
    NOTE: concise body arrow functions return any value by default, whereas block body arrow functions do not - we need to implicitly specify what value we want to return.
*/
// CONCISE BODY vs BLOCK BODY
// concise body arrow function
// when we have a single parameter, its not necessary to include parentheses where the parameter would go
let apples = number => console.log(`There are ${number} apples.`);
apples(10);
apples(5);
apples('five');
// parens ARE needed when no parameters or multiple parameters are provided
// no parameters
let apples = () => console.log('');
// multiple parameters
let apples = (numberOne, numberTwo) => console.log('');
// -------------------------------------
// block body arrow function
let apples = number => {
    console.log(`There are ${number} apples.`);
}
apples(10);
apples('ten');
apples(false);
// When your function needs to perform more complex tasks or multiple tasks, its preferred to use a block body arrow function. When your function needs to perform a singular or a very simple task, a concise body arrow function is preferred.

let nickname = "Beans"
function myName(fName) {
    // console.log('console.log from function', fName);
    let myVar = `${fName}, ${fName} the magical fruit`;
    return myVar;
} 
let captureReturn = myName(nickname);
console.log(captureReturn);