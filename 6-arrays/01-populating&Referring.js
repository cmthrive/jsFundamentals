/*
    - arrays are containers that hold a list of items
        - arrays can hold numerous data types
    - objects are held by curly braces {}
    - arrays are held by square braces []

*/

let list = ['orange', 'banana', 'apple'];

console.log(list ['1']);

/*
    - when we call an array, we can append square brackets onto the end of our array with the index number that we want to reference.
    - javascript starts counting indexes at zero. So above, orange is 0 and banana is 1, which is why when you console log the above LIST, a 1 brings back Banana.
*/

let students = ['Amruta', 'Marco', 'Nick', 'Carolina', 4, true, ['Adam', 'Alexandra', 'Alexia', 'Allyson']]

console.log(typeof students); // object 
console.log(students instanceof Array); // the instanceOf operator is used to check the type of an object at run time. Will return a true or false value. 
console.log(students [2]); // Nick
console.log(students [1]);

// CHALLENGE: dive into the nested array in the students array and pull out one of the values

console.log(students[6][2]); // 6th index is the second set of names above (Adam, etc) // Alexia

let name = students [6][1]; // another way to do it - name is variable I think 
console.log(name);

