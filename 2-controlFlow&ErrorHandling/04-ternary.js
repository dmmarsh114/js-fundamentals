/*
    - a ternary is a shortcut for writing an if/else statement
    - a ternary has to have an else/default/catch-all statement -- no basic ifs allowed!! 
*/

let num = 6;

// if/else 
if (num > 0) {
    console.log('yes');
} else {
    console.log('no')
}

// Ternary 
(num > 0) ? console.log('yes') : console.log('no'); // parentheses around your conditions make your code more readable 

// Ternary with else if statement 
(num == 0) ? console.log('working') : (num < 0) ? console.log('not working') : console.log('still not working');
//  if statement here                       else if statement here                  else statement here 

// Ternaries look cooler if broken up like this. But beware: VSC tries to reformat your code or something  
(num == 0) ? console.log('working') 
    : (num < 0) ? console.log('not working') 
    : console.log('still not working');


let age = 40;

(age >=25) ? console.log('You can rent a car!') : (age >= 21) ? console.log('You can drink!') : (age >= 18) ? console.log('You can vote!') : console.log("Sorry, you're too young to do anything :(");