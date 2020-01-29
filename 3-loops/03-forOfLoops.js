/* 
    - forOf loops look at the iterable properties of an array 
    - can't use forOf loops on objects (those are enumerable, not iterable)
    - 
*/

let dogArray = ['great dane', 'husky', 'golden retriever', 'pug', 'dalmation'];

for (let dog of dogArray) {
    console.log(dog, "goes bark");
}