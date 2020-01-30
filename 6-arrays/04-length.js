let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length); // length() simply counts the number of items, it does not start at 0 

let arr = ['blue', 25, false, ['string'], "{key: 'value'}"];
console.log(arr.length);

console.log(arr.toString());

/*
Challenge: 
    - first, check that we are working with an array 
    - using a method, flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc)
    - using a method, print the values of the newly arranged array 
*/

let myArray = ['blue', 'green', 'red', 'pink'];

console.log(myArray instanceof Array);

let myArrayReversed = myArray.reverse();
myArrayReversed.forEach(item => console.log(item));

(myArray instanceof Array) ? myArray.reverse().forEach(item => console.log(item.toString())) 
: console.log('that is not an array');