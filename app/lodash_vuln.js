const _ = require('lodash');

function containsUnicodeWord(string) {
    // Convert the string to an array of words using lodash's words function
    const words = _.words(string);

    // Check if any word has a Unicode character
    return words.some(word => /[^\u0000-\u007F]+/.test(word));
}

const example1 = "Hello world!";
const example2 = "你好，世界！";

console.log(containsUnicodeWord(example1)); // false
console.log(containsUnicodeWord(example2)); // true
