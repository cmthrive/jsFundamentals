/*
    HOISTING
        - javaScript is interpreted line-by-line (so read top to bottom), but before the code is executed, there is a first pass made by the compiler - which is where hoisting is performed. During the first pass of code, the code is interpreted and then compiled for execution, but execution of the code doesn't actually happen until the second pass.
        - during the first pass of the code, the parser runs through our code and begins to setup what we have written for translation. It recognizes where we have declared variables and where we have declared functions. This first pass of the code essentially is looking at anything on the left side of our assignment operator (let firstName = ______) - or for any declared functions - and is storing those declared variables and functions away to memory for assignment during the second pass through of our code.
        - during the second pass of our code, or the execution phase, is actually when the values we have given to our variables are assigned. Since JavaScript allows for the reassignment of variables (except for const), the actual assignment of our variables needs to happen during the second pass through of our code. That way if we declare a variable and initialize it with a value, but later change that value in our code, the secondary value we assign to the variable is what is read and assigned.
        *** First pass: Stores our variable declarations (essentially says, "hey, I know a variable of x is defined, so let me store that in my memory so I know it's there), but does not assign them their values. Anything that needs to be hoisted - delcared function included - is hoisted.
        *** Second pass: Assigns the values to our variables and executes any hoisted source code.
*/
console.log(name);
let name = 'Zach';
myFunction();
function myFunction() {
    console.log('I have been hoisted');
}