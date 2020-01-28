/*
    scope 
        - scope = how a computer keeps track of vars 
        - global scope vs local scope 
        - global = accessible throughout program 
        - local = accessible within functions, blocks, etc 
*/

let x = 12; // this is globally scoped 

function scope() {
    let x = 4; // this is locally scoped 
    console.log(x);
}

scope(); // this will return local var x 
console.log(x); // this is globally defined, different from the line above 

let y = 12; 

function scope2() {
    y = 4; // this doesn't say "let y = 4;" -- so this line is reinitializing the global y var 
    console.log(y);
}

scope2();
console.log(y); // these two lines should return the same thing 


/*
    - var is scoped to the nearest function block 
    - let is scoped to the nearest enclosing block 
*/

var x = 12; 

function varTest() {
    var x = 33; 

    if (1 == 1) {
        var x = 45; // var is scoped to the nearest function block, so it's grabbing var x from the function above and reassigning it 
        console.log(x);
    }

    console.log(x); // this is still global 
}

varTest();
console.log(x);

let x = 12;

function letTest() {
    let x = 33;

    if (true) {
        let = 45;
        console.log(x);
    }

    console.log(x);
}

letTest();
console.log(x); // look back at this 
// moral of the story: let is more precise 

/*

*/

function constTest() {
    const scope = 1; 

    if (true) {
        const scope = 2; // this is declaring a new const with the same name, so no error 
        console.log(scope);
    }

    console.log(scope);
}

constTest();