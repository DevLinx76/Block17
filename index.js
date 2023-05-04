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
