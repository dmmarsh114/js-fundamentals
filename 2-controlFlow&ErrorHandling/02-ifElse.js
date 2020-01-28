let weather = 60;

if (weather < 50) {
    console.log('Wear a jacket!');
} else {
    console.log('No jacket necessary today, boss!');
}

let name = 'Dan';

if (name == 'Daniel') {
    console.log(`Hello, my name is ${name}!`);
} else {
    console.log(`Hello, is your name ${name}?`);
}

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

let name = 'dAniEl';
let firstLetter = name[0];
let splitName = name.split(name[0]);

// bronze
if (firstLetter == name[0].toUpperCase()) {
    console.log(name); 
} else {
    console.log("bro, this isn't written correctly...");
}

// silver
if (firstLetter == name[0].toUpperCase()) {
    console.log(firstLetter); 
} else {
    console.log(splitName[1].toLowerCase());
}

// gold
if (firstLetter == name[0].toUpperCase()) {
    console.log(firstLetter + splitName[1].toLowerCase()); 
} else {
    console.log(firstLetter.toUpperCase() + splitName[1].toLowerCase());
}

let age = 18;

if (age <= 17) {
    console.log("Sorry, you're too young to do anything :(");
} else if (age >=25) {
    console.log('You can rent a car!');
} else if (age >= 21) {
    console.log('You can drink!');
} else if (age >= 18) {
    console.log('You can vote!');
}