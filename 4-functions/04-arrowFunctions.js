let hi = () => {
    console.log('hello');
}
hi();

/*
    - all arrow functions need to be set to a variable 
    - the fat arrow signifies that this is a function 
    - arrow functions are the shorthand way for writing a function expression 
    - this is not a declaration, so this will not get hoisted 
*/

// concise body 
let hey = () => console.log('hey'); // return is implicit and happens by default 
hey();

// block body 
let howdy = () => {
    console.log('howdy!');
    // return keyword must be present inside of block body arrow functions 
}
howdy();

// concise vs block 
let apples = num => console.log(`There are ${num} apples.`);  // if the function only has one parameter, you can write it without parenths. Any other time, though, you need the parenths 
apples(4);

let counting = num => {
    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
}
counting(20);