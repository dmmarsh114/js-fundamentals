let hey = function hi() {   // storing functions in variables like this prevents the function from being hoisted. 
    console.log('hello');
}; 

console.log(hey);

// function declarations get hoisted, but function expressions do not. Above is an example of a function expression 