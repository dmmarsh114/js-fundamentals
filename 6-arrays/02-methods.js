let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheesecake', 'hotdog'];
console.log('original array:', food);

// push method
food.push('pancake');   // adds an item to the end of an array 
console.log('push:', food);

// splice method 
food.splice(1, 1, 'bananas'); // position / how many items to delete / what to replace those items with 
console.log('splice:', food);

food.splice(2,0,'sweet potato pie'); // puts sweet potato pie in the 2 index 
console.log(food);

// pop method
food.pop();     // removes the last item from an array. this item can be stored in a var 
console.log('pop:', food);

// shift method 
food.shift();    // removes the first item from an array 
console.log('shift:', food);

// unshift method
food.unshift('popcorn', 'steak');  // adds items to the beginning of an array 
console.log(food);

// this line demonstrates that all these methods modify the original array. Other methods create copies of your original array. These don't
console.log('original array', food);