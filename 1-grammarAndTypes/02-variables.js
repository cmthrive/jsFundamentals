/*
- variables are named containers for storing data values or data types
- we name variables so that we can refer to the data they're holding at a later point in time
*/

    let number = 2; 

/* (1) (2) (3) (4)
1- javascript keyword
2- variable name
3- assignment operator
4- value of the variable
*/

let numberOne = 5;
let numberTwo = 3;

console.log(numberOne + numberTwo); // outputs 8

/*
- a variable name must begin with a letter, underscore, or a dollar sign ($)
- a number may follow the above characters, but they cannot come first
- a javascript is case sensitive - 'hello' and 'Hello' are different variables
- no spaces allowed in variable names
- camelCase is the best practice for naming variables
*/

/*
var, let, const

- var: 'old' keyword for variables
- let: 'new' keyword for variables
- const: 'new' keyword for variables; declares an unchangeable value
*/

/*
declaration vs initialization

declations are the LEFT SIDE of the assignment operator when writing a variable

initilization is the RIGHT SIDE of the assignment operator, or the value we're assigning to a variable
*/

let x; 
console.log('Declaration:', x);

x = 10;
console.log('Initialization:', x);

x = 20;
console.log('Reinitialization', x);