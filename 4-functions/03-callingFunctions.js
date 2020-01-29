function hi() {
    console.log('hello');
}

console.log(hi()); // output: hello undefined -- this is because the function is immediately invoked, before the console.log() does 

// as soon as the parser sees that a function is being invoked, it does that immediately 

// Challenge: write a function that lists out the numbers between 1 and 10 
function listNumbers(lastNumber) {
    for (let i = 1; i <= lastNumber; i++) {
        console.log(i);        
    }
}

listNumbers(10);
listNumbers(5);

// Write a function that lists the values of an array individually: 
let arr = ['This', 'is', 'really', 'cool'];

function printArr() {
    for (let i of arr) {
        console.log(i);
    }
}

printArr();