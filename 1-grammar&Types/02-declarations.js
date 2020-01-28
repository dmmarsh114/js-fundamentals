/*
    - a variable is a named container that stores data 
    - naming variables lets us refer to them later
*/

let a = 2;

    let b = 1;
/*  1   2 3 4 

    1 - keyword (has specific use in js)
    2 - var name 
    3 - assignment operator 
    4 - the var's value 

*/

console.log(a + b);

/* 
    notes on variables: 
        - name of var must begin with letter, underscore, or $ 
        - numbers in a name can come after a letter, underscore, or $ -- but never before! 
        - js is case sensitive, so WATCH OUT 
        - no spaces allowed in var names 
        - useCamelCaseInYourVarNames -- it improves readability 
        
*/

/*
    var, let, const keywords: 
        - var: old keyword for declaring vars 
        - let: new keyword for declaring vars, introduced in ES6 
        - const: locks the var's value, var cannot be reassigned later in code 
*/

/* 
    declaring vs initialization: 

        - declarations are what is on the left side of an assignment operator (=)
            eg: let x = 4;  <-- 'let x' is the declaration 

        - initializations are on the right side of the assignment operator 
            they set the value of the var 
            in example above, 4 is the initialization 
*/

let x;
console.log('Declaration:', x); // this will return "Declaration: undefined" 

x = 10; 
console.log('Initialization:', x); // x now has a value, so this will return "Initialization: 10"

// HOLY COW YOU CAN REASSIGN VAR VALUES!!!! :O
x = 100;
console.log('Reinitialization:', x); // "Reinitialization: 100" 

let y = 'hello';
console.log(x, y); // 100 hello 

const today = 'Great';
console.log(today);

/*
Doing this will throw a bunch of errors: 

today = 'Wonderful!';
console.log(today);
*/