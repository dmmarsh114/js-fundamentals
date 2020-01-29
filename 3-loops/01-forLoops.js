/*
    - for loops use three parameters:
        1: initial expression
        2: condition
        3: increment expression
*/

//       1          2    3
for (let i = 0; i < 10; i++) {  // it's important to use 'let' to declare i -- otherwise might run into scope issues 
    console.log(i);    
}

// Challenge: count to 20 by 2s:
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// Count to 0, starting from 10: 
for (let i = 10; i > 0; i--) {
    console.log(i);
    if (i == 1) { console.log('Blast off!'); }
}

// Count from 0 to -24 by 2s:
for (let i = 0; i >= -24; i -= 2) {
    console.log(i);
}

// Go through a name, and display each letter individually: 
let name = 'smittywarbenyagermanjensen';
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

// Add up all the numbers from 1 to 50: 
let x = 0;
for (let i = 0; i <= 50; i++) {
    x += i;
}
console.log(x);