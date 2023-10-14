//Block17 Workshop: Coffee Menu

// Overview:
// You have just been hired at a famous coffee chain as a web developer. Your 
// first assignment is to clean up the menu data and filter it through 
// specific guidelines (prompts two through seven).

// Project Requirements:
// 1. Clean the coffee_data.js file.

//     - All prices should be numbers.
//     - All items should be strings.
//     - Objects and properties should have commas separating them.
//     - Connect the coffee_data.js file to the index.js file.

// 2. Print an array of all the drinks on the menu.
// 3. Print an array of drinks that cost 5 and under.
// 4. Print an array of drinks that are priced at an even number.
// 5. Print the total if you were to order one of every drink.
// 6. Print an array with all the drinks that are seasonal.
// conditon has to evaluate to true, even if you are trying to fetch...
// 7. Print all the seasonal drinks with the words "with imported beans" 

// after the item name. For example: "affogato with imported beans".

// Complete the following coding challenges using what you know about 
// debugging and higher-order functions. Some of the questions rely on 
// previous answers, so do your best to complete prompts two through seven 
// in order.

// Note: Be sure to console.log and console.table throughout the workshop 
// to check your work.




const coffeeMenu = require("./coffee_data");

// Prompt 2
// Print an array of all the drinks on the menu.
const allDrinks = coffeeMenu.map(item => item.name);
console.log(allDrinks);

// Prompt 3
// Print an array of drinks that cost 5 and under.
const cheapDrinks = coffeeMenu.filter(item => item.price <= 5).map(item => item.name);
console.log(cheapDrinks);

// Prompt 4
// Print an array of drinks that are priced at an even number.
const evenPricedDrinks = coffeeMenu.filter(item => item.price % 2 === 0).map(item => item.name);
console.log(evenPricedDrinks);

// Prompt 5
// Print the total if you were to order one of every drink.
const totalPrice = coffeeMenu.reduce((total, item) => total + parseFloat(item.price), 0);
console.log(totalPrice);

// Prompt 6
// Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter(item => item.seasonal).map(item => item.name);
console.log(seasonalDrinks);

// Prompt 7
// Print all the seasonal drinks with the words "with imported beans" after the item name.
const seasonalDrinksWithImportedBeans = coffeeMenu.filter(item => item.seasonal).map(item => `${item.name} with imported beans`);
console.log(seasonalDrinksWithImportedBeans);


