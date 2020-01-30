/*
    - arrays are containers that hold a list of items
    - use [] 
    - can hold multiple data types (strings, numbers, booleans, arrays, etc)
    - each item is separated by a comma 
*/

let list = ['orange', 'banana', 'kiwi'];
console.log(list);
console.log(list[2]);  // square bracket notation 

/*
    - use square bracket notation to call a specific item from an array. the number within square brackets is the index of that item
    - js starts counting indeces at 0
*/

let students = ['Matt', 'Bob', 'Jeff', 'AB', 23, true, ['Kris', 'Taylor', 'Will']]

console.log(typeof students);     // returns the students datatype 
console.log(students instanceof Array);     // returns true/false if students is an instance of an array 

// Challenge: dive into the nested array in students and return the value 'Will'. Print out, "hello Will!"
let name = students[6][2];
console.log(`hello ${name}!`);