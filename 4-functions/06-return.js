let name = () => {
    return 'Dan';
}

let myNameIs = name();
console.log(myNameIs);

// Challenge: make a tip calculator using a function, have it return the value, capture that value in a var and print that var
// block body arrow function 
let tipCalc = (bill) => {
    let tip = bill * 0.2;
    return tip.toFixed(2);
}

let tip = tipCalc(19.84);
console.log(tip);

// concise body arrow function 
let tipCalc = bill => (bill * 0.2).toFixed(2);
let totalTip = tipCalc(19.84);
console.log(totalTip);

// basic function 
function tipCalculator(bill) {
    let tip = bill * 0.2;
    return tip.toFixed(2);
}

let totalTip = tipCalculator(40.34);
console.log(totalTip);