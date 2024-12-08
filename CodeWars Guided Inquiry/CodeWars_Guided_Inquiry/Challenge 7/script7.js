// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.


// Found out that .map does the same as split and join all in one
function toNumberArray(stringArray) {
    return stringArray.map(Number);
}

