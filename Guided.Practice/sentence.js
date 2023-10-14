// sentence.js

class Sentence {
    constructor(data) {
        this.data = data;
    }

    wordCount() {
        return this.data.split(' ').length;
    }

    hasLetter(letter) {
        return this.data.indexOf(letter) !== -1;
    }

    letterCount(letter) {
        let count = 0;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] === letter) {
                count++;
            }
        }
        return count;
    }

    stats() {
        const obj = {};
        const words = this.data.split(' ');
        words.forEach(word => {
            if (obj[word] === undefined) {
                obj[word] = 0;
            }
            obj[word]++;
        });
        return obj;
    }
}

// Prompt the user for a sentence. Keep prompting until valid input is provided.
let data = window.prompt('Enter a sentence');

while (data === null || data.trim() === '') {
    alert("Please provide a valid sentence.");
    data = window.prompt('Enter a sentence');
}

const s1 = new Sentence(data);
console.log(s1.wordCount());          // Logs word count
console.log(s1.hasLetter('X'));       // Checks if 'X' exists in the sentence
console.log(s1.hasLetter('q'));       // Checks if 'q' exists in the sentence
console.log(s1.letterCount('e'));     // Counts occurrences of 'e'
console.log(s1.letterCount(' '));     // Counts spaces (useful to determine word count)
console.log(s1.stats());              // Returns a stats object for each word and its count
