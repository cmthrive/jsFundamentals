/*
    OBJECT BRACKET NOTATION
        - bracket notation can also be used with objects to pull out values, just like we would with an array
        - object bracket notation can be handy if we want to store new keys in an object, and then reference those keys later on.
        - all keys in an object are strings
*/
let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}
// keys in an object are strings, even though we don't need to explicity wrap them in quotes
let test = Object.keys(garden); // Object.keys() will return us an array of all of the keys in the referenced object
console.log(test);
console.log(typeof test[0]);
let zucchini = garden['vegetable']; // we can access keys in an object by specifying the name of the object that we want to reference, followed by the keys name in square brackets. The key name that we pass into the square brackets, needs to be wrapped in quotes, since all keys in objects are strings.
console.log(zucchini);
// setting a new key/value pair in an object using square bracket notation
let baking = {};
baking['zucchini'] = 'better make some bread!';
console.log(baking);
// -----------------------------------
let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}
let baking = {};
baking['zucchini'] = 'better make some bread!';
console.log(baking);
//          baking['zucchini']
console.log(baking[garden['vegetable']]); // [garden['vegetable']] evaluates to 'zucchini', leaving us with baking['zucchini'] in the console.log, which will output 'better make some bread!'
// using square bracket notation is a good idea when you aren't able to use dot notation to dig through an object
let testObj = {
    "Spaces Here": true,
    noSpaces: true
}
console.log(testObj.noSpaces);
console.log(testObj["Spaces Here"]);