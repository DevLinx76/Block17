// Project Requirements:
// 1. Clean the coffee_data.js file.

    // - All prices should be numbers.
    // - All items should be strings.
    // - Objects and properties should have commas separating them.
    // - Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    }
]

const cleanedNumberData = coffeeMenu.map((coffeeObject) => {
    coffeeObject.price = Number(coffeeObject.price);
    return coffeeObject;
});

console.log(cleanedNumberData);

module.exports = coffeeMenu;
