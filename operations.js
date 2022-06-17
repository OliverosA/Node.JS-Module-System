//creating the 2 functions for the module
function sum(num1, num2){
    return num1 + num2;
}

function subs(num1, num2){
    return num1 - num2;
}

//exporting the functions to be able to use in any other module
module.exports = { sum, subs };