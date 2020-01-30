/*
    forEach() method: 
        - does the same thing as a for loop/ for of loop -- they all iterate over properties in an array 
        - parameters that forEach takes: 
            1: each item in the array 
            2: the index of each item (this parameter is optional)
*/

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheesecake', 'hotdog'];

// for loop
for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}

// forEach / fat arrow function 
food.forEach((foodItem, index) => console.log(foodItem, index)); 

// forEach / fat arrow block body 
food.forEach(individualFoodItem => {
    console.log(individualFoodItem);
});

// forEach / function 
food.forEach(function(foodItem, index) {
    console.log(foodItem);
    console.log(index);     // prints the index of each item 
})

// Challenge: create an array of movies, use forEach to list them, add another movie at the end of the array, replace a movie with a different one 

let movies = ['Parasite', 'Underwater', 'Knives Out', 'What We Do in the Shadows'];
movies.forEach(i => console.log(i));

movies.push('Last Jedi');
console.log(movies);

movies.splice(1, 2, 'Empire Strikes Back', 'The Two Towers');
console.log(movies);