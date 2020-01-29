/*
    - great for counting key/value pairs in an object 
    - properties in an object are enumerable 
    - for in loops will iterate over an object's enumerable properties 
*/

let student = {
    name: 'stuart', 
    awesome: true, 
    degree: 'JavaScript', 
    week: 1
};

console.log(student.degree); // dot notation 

for (let item in student) {
    console.log(item);
    console.log(student[item]); // object bracket notation 
}

let dogArray = ['great dane', 'husky', 'golden retriever', 'pug', 'dalmation'];

for (let dog in dogArray) {
    console.log(dogArray[dog]);
}

// Challenge: write a for in loop that capitalizes the first letter of a name, then lowercases the rest of the letters 
let name = 'gAVIN';
let capName;

for (let i in name) {
    if (i == 0) {
        capName = name[i].toUpperCase();
    } else {
        capName += name[i].toLowerCase();  // += concatenates and adds the letter to the string 
    }
}

console.log(capName);