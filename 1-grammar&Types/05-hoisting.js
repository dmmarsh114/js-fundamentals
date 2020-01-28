/*
    - js is interpreted line by line, top to bottom 
    - js performs two passes of the code: 
        1st pass - recognizing delcared vars and storing them in its memory (anything left of the =)
        2nd pass - assigns the values to the vars 
    - functions are also hoisted 
*/

console.log(name); 
let name = 'Dan'; // first pass: notices the var name. second pass: tries to execute code line by line, so it produces an error. It knows that name exists, but hasn't gotten to its initialization 

b();
function b() {
    console.log('I have been hoisted!'); // this block runs with no problem 
}