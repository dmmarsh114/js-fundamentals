/*
    - switch statements execute a block of code depending on different cases 
    - also use the keywords "break" and "default"
        - these are optional 
        - break will break out of current condition and switch statements 
        - default will execute if none of the other statements do 
*/

let officeCharacter = 'Michael';

switch(officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour.");
        break;                         // break ends the case condition check, otherwise all cases would run 
    case "Dwight":
        console.log("Perfectenshlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica.");
        break;
    default: 
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`); // default does not need a break! 
}

let dessert = 'pie';
let favDessert = 'pie';

switch(dessert) {
    case favDessert: 
        console.log('Pie pie, oh me oh my!'); 
        break;
    case 'cake': 
        console.log('Cake is great!'); 
        break;
    case 'ice cream': 
        console.log('I scream for ice cream!'); 
        break; 
    default: 
        console.log("I'm sorry, but that item is not on the menu.");
}