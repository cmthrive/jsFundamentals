// EQUAL
'3' == 3;
console.log('3' == 3);
/*
    - coercion is the process of converting a value from one type to another
    - in the above example, javascript assumes that we are trying to check if a number of 3 is equal to another number of 3, even though one of our values is a string.
*/
// STRICT EQUAL - this overrides javascript coercion
console.log(3 === 3); // true
console.log('3' === 3); // false
// NOT EQUAL
console.log('3' != 3);
// STRICT NOT EQUAL - this overrides javascript coercion
console.log('3' !== 4);
console.log(4 !== 5);
// GREATER THAN
3 > 2 // true
// LESS THAN
2 < 3 // true
// GREATER THAN OR EQUAL TO
3 >= 2; // not confused to be confused with => (fat arrow functions)
// LESS THAN OR EQUAL TO
2 <= 3;
// AND
2 && 3
// OR
2 || 3;











