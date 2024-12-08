//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.


// I reasearched and found out that .filter method creates a new array with all elements that pass the test implemented by the provided function.

function filterList(l) {
    return l.filter( item => typeof item === 'number' );
}