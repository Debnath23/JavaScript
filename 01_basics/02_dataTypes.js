"use strict"; // Treat all JS code as newer version

// alert(3 + 3) -> we are using nodejs, not browser

console.log(3
    +
    3) // code readability should be high

let name = "Debnath"
let age = 22
let isLoggedIn = false
let state;

/*
Primitive Datatypes:

number => 2 to power 53
bigint => very big int
string => ""
boolean => true/false
null => standalone value
undefined => 
symbol => unique

Non-Primitive Datatypes:

object
*/

console.table([typeof "Debnath", typeof 22, typeof false, typeof state])
console.log(typeof undefined)
console.log(typeof null)