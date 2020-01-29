function hi(name) {
    if (!name) { console.log('what is your name?'); }
    else { console.log(`hello ${name}`); }
}

let nickname = 'ricky';
hi('daniel');
hi('world');
hi();
hi(nickname);

function dan(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
}

dan('sandwich');


function counter(number, cap) {
    for (number; number <= cap; number++) {
        console.log(number);
    }
}

counter(3,12);

// Challenge: write a function that takes 2 parameters (firstName and lastName), combines them, and prints them both. 

function introduceMyself(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    console.log(`Hello, my name is ${fullName}`);
}

introduceMyself('monty', 'python');

let beautifulName = 'daniel';
let magnificentName = 'marsh';

introduceMyself(beautifulName, magnificentName);