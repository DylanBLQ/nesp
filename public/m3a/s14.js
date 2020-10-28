/**
 * String
 */

let value = 'Solution' + 42;
console.log('Concatenating string with a number lead to a new string', value, 'Solution' + 42 === 'Solution42');

let a = 42;
console.log('Explicit conversion number to string', a, a.toString() === '42');

console.log('Explicit conversion string to number', Number('42.7') === 42.7);

console.log('Explicit conversion string to int', parseInt('42') === 42);

console.log('Do not parseInt() instead of Math.floor()', parseInt('42.7') === 42);
console.log('Parsing a non number as int leads to NaN', isNaN(parseInt('hello')));
