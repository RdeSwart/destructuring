/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30,26,27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2]; In Vanilla, we have to declare each variable individually and reference the index of the item
let [john,mary,joe] = ages; //Using ES6, we can reduce to a single line of code.
console.log(john,mary,joe)

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike,jill,alicia} = jobs;
console.log(mike, jill, alicia)

// Destructuring subsets - Arrays
let languages = ["english", "french", "spanish", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary); //will take index 0 + 1 automatically

let [, , maryNative, marySecondary] = languages; //will skip the first two indexes
console.log(maryNative, marySecondary);
// Destructuring subsets - Objects
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japenese"
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage)


// Using rest parameter syntax
let fruits = ["apples", "oranges", "bananas", "peaches", "cherries"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);


//Object
let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};
let { brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);