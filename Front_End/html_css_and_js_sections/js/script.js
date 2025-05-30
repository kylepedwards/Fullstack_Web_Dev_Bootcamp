console.log("\nHello World!\n")

var hello_world = "Hello World, I'm a variable.";
let this_is_a_let = "This is a 'let'.";
const this_is_a_const = "This is a 'const'.";

// This is a single-line comment.
/*
    This is a multi-line comment.
*/

// Data Structures
var str = "A string";
var num = 3;
var flt = 3.14;
var bool = true;
var list = ["1", "2", 3, 4.0, ["list in a list"]];
var thing = null;
var notDefined = undefined;
var getAge = function() { return 31; };
var obj = {
    'key': 'keyName',
    'value': 'valueName'
}

if (getAge() == 31) {
    console.log("31 is 31")
} else if (getAge() <= 31) {
    console.log("Younger than 31")
} else {
    console.log("Not 31.")
}

const box = document.getElementById("container_number_1");
/*
box.innerText = "This bit of text was altered by JavaScript.";
box.innerHTML = "Another alteration by JavaScript";
*/