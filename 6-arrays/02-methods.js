/*
    ARRAY METHODS

        - array methods are methods or functions that are built into JS, that we can use to make our lives as developers easier
*/

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog']

// array.push() method - allows us to push one or more elements to the end of our original array. Push method will always add the new element to the END of the array

food.push('Pizza');
console.log('push:', food);    

// array.splice() - the splice method allows us to add and remove elements from an array
food.splice(1, 1, 'Bananas');
console.log('splice:', food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log('splice 2:', food);

// array.pop() - the pop method removes the last item from an array
food.pop();
console.log('pop', food); // remove pizza because we added pizza with the Push method

// array.shift() - shift removes the first method from an array
food.shift();
console.log('shift:', food);

// array.unshift() - the unshift method adds one or more elements to the beginning of an array
food.unshift('Popcorn', 'Steak');
console.log('unshift:', food);