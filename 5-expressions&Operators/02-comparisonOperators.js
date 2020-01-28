/*
    coercion is the process of ocnverting a value from one type to another 
        eg: '3' == 3 will return true because js converts the second value (number) to a string
        coercion does not work in conditional statements!
*/

// equal 
console.log('3' == 3);

// strict equal 
console.log('3' === 3); // will return false bc strict equal checks for both value AND data type 

// not equal 
console.log('3' != 3); // will return false 

// strict not equal 
console.log('3' !== 3); // will return true 

// greater than (coercion does not happen with greater than/less thans)
console.log(3 > 2); 

// less than 
console.log(2 < 3); 

// greater than or equal to
console.log(3 >= 2); 

// less than or equal to 
console.log(2 <= 3); 

// and 
if (2 && 3 > 1) { console.log('yo'); }

// or
if (2 || 3 == 3) { console.log('yoyo'); } //(those symbols are called pipes)