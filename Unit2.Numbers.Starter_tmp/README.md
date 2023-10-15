# Unit2.Numbers.Starter

In this project, I've expanded the functionality of the `Numbers` class.

## Changes Made

### Initialization
- The constructor for the `Numbers` class has been enhanced to accept both a string format and an array of numbers. 
- For string inputs, it splits the string based on commas and then maps it to create an array of numbers.

### Methods

**count()**:
- Returns the count of numbers.

**printNumbers()**:
- Prints each number along with its index.

**odds()**:
- Filters and returns only the odd numbers.

**evens()**:
- Filters and returns only the even numbers.

**sum()**:
- Calculates and returns the sum of all numbers.

**product()**:
- Calculates and returns the product of all numbers.

**greaterThan(target)**:
- Filters and returns numbers that are greater than the provided target value.

**howMany(target)**:
- Returns the count of occurrences of a specific number.

### User Interaction

Upon loading the `index.html` file, the user is prompted to enter a list of integers separated by commas. The script then processes the input using the `Numbers` class and logs various results to the console.

## Instructions

1. Fork this repository and then clone it down to your own computer.
2. Open the project in VS Code.
3. Live serve `index.html`. You will be greeted with a prompt to enter numbers.
4. After input, observe the results in the browser console.
5. The core functionality lies in the `index.js` file, where the `Numbers` class is defined and utilized.

## Feedback and Contribution

I am always open to feedback and improvements. If you have suggestions or find any bugs, feel free to open an issue or submit a pull request.
