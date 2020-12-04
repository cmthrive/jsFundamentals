// CALLING FUNCTIONS   
function hello() {
    console.log('hi!');
}
// hello; // nothing happens
// hello(); // hi!
// console.log(hello); // [Function: hello]
console.log(hello()); // hi!    undefined - function invocations happen immediately once the line of code is read. The function will run before anything else in that line of code will run
// CHALLENGE: create a function that, when invoked, prints out the numbers 1-10
function numbers() {
    for(let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
numbers();
// CHALLENGE: given the array, create a function that lists out the values individually. Try using either a for in or for of loop!
// for of loop
let arr = ["This", 'is', 'really', 'cool'];
function wow() {
    for (let item of arr) {
        console.log(item);
    }
}
wow();
// for loop
let arr = ["This", 'is', 'really', 'cool'];
function wow() {
    for (let i = 0; i < arr.length; i += 1){
        console.log(arr[i]);
    }    
}
wow();