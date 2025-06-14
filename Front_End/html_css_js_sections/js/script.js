"use strict";

console.log("\nHello World!\n")

// Var, Let, Const
var variableName = "This is a 'variable'.";
let letName = "This is a 'let'.";
const constName = "This is a 'const'.";

// This is a single-line comment.
/*
    This is a multi-line comment.
*/

// Operators: + - * /

// Data structures
var str = "A string";
var num = 3;
var float = 3.14;
var bool = true;
var list = ["Item 1", 2, 3.14, []];
var nullThing = null
var notDefined = undefined;
var getAge = function() { return 32; };
var obj = {
    'key': 'value',
    'object1': 'object2'
};

// Conditionals
var number = 25;

if (number >= 21) {
    console.log("\nNumber is greater than 21.");
} else if (number == 21) {
    console.log("\nNumber matches 21.");
} else {
    console.log("\nNumber is less than 21.");
};

// DOM manipulation
var domManipulationPart1 = document.getElementById("DOM_manipulation_part_1");
var domManipulationPart2 = document.getElementById("DOM_manipulation_part_2");

domManipulationPart1.innerText = "This text is 'innerText'.";
domManipulationPart2.innerHTML = "This text is <strong>'innerHTML'</strong>.";

// Array iteration
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Old fashioned way:
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

// Modern way:
arr.forEach(num => {console.log(num);});

// Selecting multiple DOM nodes: document.querySelector(), document.querySelectorAll(), and so on.

// Functions
function firstFunction() {
    console.log("\nFirst function call.\n");
};

firstFunction();