let temp = 75;
// Read as, if "temp" is less than 70, console.log "Wear a jacket", if "temp" is NOT less than 70, console.log "No jacket necessary"
if (temp < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary');
}
/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log ' Hello, is your name <name here>?'
*/
let name = "James";
// Bronze
if (name == "Nick") {
    console.log(name)
} else {
    console.log("Hello, what is your name?")
}
// Silver
if (name == "Nick") {
    console.log("Hello, my name is", name)
} else {
    console.log("Hello, what is your name?")
}
// Gold
if (name == "Nick") {
    console.log("Hello, my name is", name)
} else {
    console.log("Hello, what is your", name + "?")
}
/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that first letter plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/
let myName = 'ZAchARy';
// console.log(myName.charAt(4));
// console.log(myName[0]);
// console.log(myName.slice(1))
// Bronze Solution
// if the first letter is EQUAL to an upper case version of the first letter
if (myName[0] == myName[0].toUpperCase()) {
    console.log(myName);
} else {
    console.log("Hey, this isn't written correctly")
}
// Silver
if (myName[0] == myName[0].toUpperCase()) {
    console.log(myName.charAt(0)); // or myName[0]
} else {
    console.log(myName.slice(1).toLowerCase())
}
// Gold
if (myName[0] == myName[0].toUpperCase()) {
    console.log("true body:", myName.charAt(0) + (myName.slice(1).toLowerCase())); // or myName[0]
} else {
    console.log("not true body:", myName.charAt(0).toUpperCase() + (myName.slice(1).toLowerCase()));
}
let address = "Indy, IN";
let address2 = "Indianapolis, IN";
// Want to print just last 2 letter
console.log(address.substr(-2));
console.log(address2.substr(-2));
/*
CHALLENGE
************
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/
let age = 19;
// one way
if (age <= 17) {
    console.log("You're too young to do anything");
} else if (age <= 18) {
    console.log("You can vote");
} else if (age <= 21) {
    console.log("You can drink!");
} else if (age <= 25) {
    console.log("You can rent a car!");
}
let age = 19;
// another w/ multiple conditions
if (age <= 17) {
    console.log("You're too young to do anything");
} else if (age >= 18 && age <= 20) {
    console.log("You can vote");
} else if (age >= 21 && age < 25) {
    console.log("You can drink!");
} else if (age >= 25) {
    console.log("You can rent a car!");
}
let age = 23;
// another way still
if (age >= 25) {
    console.log("Yay! You can rent a car!");
} else if (age >= 21) {
    console.log("Yay! You can drink!");
} else if (age >= 18) {
    console.log("Yay! You can vote");
} else {
    console.log("you're too young to do anything fun")
}