console.log("\nHello World.\n");

var thisVariable = "Variable";
let thisLet = 'Let';
const thisConst = "Constant";

// Single-line comment

/*
Multi-line comment 
*/

// Data Structures
var str = "string";
var num = 2;
var flt = 3.14;
var bool = true; // or "false"
var list = ["1", 2, 3.14, ["Five"]];
var thing = null;
var notDefined = undefined;
var getAge = function() { return 31; }; // function in a variabl
var obj = {
    'key': 'value pair'
}; 

// Conditionals
if (typeof(str) == String) {
    console.log("Correct! This is a string.")
} else {
    console.log("Not a string.")
};

if (num >= 0) {
    console.log("2 is greater than 0.")
} else {
    console.log("Number is not greater than 0.")
};

// DOM manipulation
var domDummyManipulator = document.getElementById("dummy");
domDummyManipulator.innerText = "This text came from 'innerText' JavaScript.";
domDummyManipulator.innerHTML = "This text came from 'innerHTML' JavaScript."

