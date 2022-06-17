//importing the functions of the operations.js module
const { sum, subs } = require("./operations");

let num1 = 2;
let num2 = 1;

console.log(`The value for the numbers are: \nnumber 1 = ${num1} \nnumber 2 = ${num2}`);

//using the functions from operations.js module
console.log(`The result of the sum operation is: ${sum(num1, num2)}`);
console.log(`The result of the substract operation is: ${subs(num1, num2)}`);