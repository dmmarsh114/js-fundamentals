/* 
    booleans 
        - a boolean is either true or false 
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
    null
        - null is an empty value 
        - even though nothing is in it, the container still exists and can be filled later 
*/

let empty = null;
console.log('Daniel is', empty, 'inside.');

/*
    undefined 
        - no value has been assigned, but this does not act like an empty container like null does
        - probably better to just leave a var uninitialized than to declare it as undefined
        - var is undefined when it hasn't been set or created yet 
*/

let undef = undefined;
console.log(undef);

let correct;
console.log(correct); // this is the same as declaring it undefined 

/* 
    numbers 
        - don't need to distinguish between floats and ints ??
        - js is not the best at maths, better with whole numbers than decimals 
*/

let degrees = 33;
let b = 33.2; 

console.log(degrees, b);

let precise = 999999999999999; // 15 9's
let rounded = 9999999999999999; // 16 9's, js will round this up probably 

console.log(precise);
console.log(rounded);

let decimal = 0.2 + 0.1;  
console.log(decimal); // this will return something weird

/*
    strings
        - text 
        - use single or double quotes 
*/

let myString = 'double quotes';
let myOtherString = "single quotes";

console.log(myString, myOtherString); // see how both of these are returned the same way? wild. 

// numbers vs strings 
let first = 1050 + 100;
let second = '1050' + '100'; // this is concatenation 

console.log(first);
console.log(second);

// use typeof expression to return datatypes of vars 
console.log(typeof first); // will return 'number' 
console.log(typeof second); // will return 'string' 

// if you're trying to do maths with one datatype that is a number and another that is a string, js will convert the whole expression into a string 

/*
    objects
        - a special datatype that can hold multiple values 
        - these values are known as key/value pairs 
            eg: age: 25
            multiple key/value pairs are separated by commas 
            values are wrapped in {}
*/

let frodo = {
    race: 'hobbit', 
    rings: 1, 
    cloak: true
};

console.log(frodo);
console.log(frodo.rings);

/* 
    arrays 
        - another container that can hold multiple values 
        - not key/value pairs, but individual values 
        - can hold different types of values 
        - values are wrapped in []
        - values are separated by commas 
*/

let myList = ['coding is fun!', 45, true]; 

console.log(myList);
console.log(typeof myList);


// make a lot of variables and console.log them to spell out your address or something 

let firstName = 'Daniel';
let lastName = 'Marsh'; 
let houseNumber = 31; 
let street = 'Bag End';
let city = 'Hobbiton';
let state = 'Shire';
let zipcode = 1000;

console.log(firstName, lastName + ', ' + houseNumber, street, city + ', ' + state, zipcode); 

/*
    string properties
        - properties = qualities associated with a specific datatype 
            eg: strings have length propery 
*/

console.log(firstName.length); // length will start counting at zero 

/*
    string methods
        - methods are tools that can help us manipulate certain data 
        - followed by parentheses
        - .property & .method()
*/

console.log(firstName.toUpperCase()); // returns DANIEL 

let myHome = 'My home is Greenwood'; 
console.log(myHome.includes('Greenwood'));
console.log(myHome.includes('Muncie'));

let sent = 'this sentence will be split into individual parts';

console.log(sent.split(" "));