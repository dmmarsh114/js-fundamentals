// If you want to make multiple objects with the same keys but different values, use a constructor function! 

//  1       2           3
function Person(name, age, canVote) {
//   4    5      6
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

//             7    8
let person4 = new Person('Jerry', 24, true);
console.log(person4);

/*
    1: use the function keyword when declaring a constructor function 
    2: name the constructor function. It's good form to capitalize the first letter 
    3: parameters for this function will become values in the new object 
    4: the 'this' keyword refers back to whatever called the keyword. In this case, 'this' refers to Person()
    5: these are the keys for the new object 
    6: the arguments that we pass through become the values assigned to the keys 
    7: 'new' is another keyword, which creates another instance of the object that Person() creates 
    8: calling the constructor function here 
*/