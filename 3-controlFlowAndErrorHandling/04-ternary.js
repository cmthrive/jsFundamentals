// Ternary are basically acts as a shortcut for writing if & if/else statements
let num = 6;
// Ternary:
(num > 0) ? console.log('yes') : console.log('no');
// (condition) ? code to run if condition true : code to run if condition not true
// Instead of:
if (num > 0) {
    console.log('yes');
} else {
    console.log('no');
}
// Conditional with if & else if
if (num > 10) {
    console.log('a first statement');
} else if (num < 0) {
    console.log("another statement");
} else {
    console.log('yet another, man');
}
// Same as above but a ternary:
(num > 10) ? console.log('a first statment') : (num < 0) ? console.log("another statement") : console.log('yet another, man');
// Can also rewrite our ternary to make more readible:
(num > 10) ? console.log('a first statment')
 : (num < 0) ? console.log("another statement")
 : console.log('yet another, man');
 /*
CHALLENGE
************
    Write a ternary that does the same thing as the age challenge
    Age Challenge (if else):
    let age = 30;
    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }
*/
let age = 23;
(age >= 25) ? console.log('Yay, You can rent a car')
 : (age >= 21) ? console.log('Yay, you can drink!')
 : (age >= 18) ? console.log('Yay, you can vote!')
 : console.log(`Sorry, you're too young to do anything, kiddo`)