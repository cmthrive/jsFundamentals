/*
    PROPERTIES AND METHODS

        - In most cases, properties and qualities related to the data we're working with, and methods are action we can 
        perform on the data we're working with. Using a method causes something to happen to the data, while using a property 
        returns information about the data.

        - .property and .methods()
            - methods have parents behind them, properties do not.
*/

// STRING PROPERTIES

// Length
let myName = 'Chris';
console.log(myName.length);

//STRING METHODS

let myDogsName = 'sam';
console.log(myDogsName.toUpperCase()); // changes a string to uppercase

let home = 'My home is Indianapolis';
console.log(home.includes('Indianapolis'));

/*

// challenge: use google, find MDN documentation for string methods. Research the string '.split()' method, and use and 
implement it to get an array back from a string.

*/

let sent = 'This sentence will be split into individual parts';
console.log(sent.split('')); //splits at each individual character
console.log(sent.split(' ')); //splits at each space in the original string
console.log(sent.split(',')); // split at the comma