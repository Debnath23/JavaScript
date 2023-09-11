let score = "22";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let score1 = "22abc";

console.log(typeof score1);

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1); // converted in number but the output is NaN i.e. Not a Number therefore we use TypeScript for strict cheacking.

let score2 = null;

console.log(typeof score2); // Object

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2); // 0

let score3 = undefined;

console.log(typeof score3); // Undefined

let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3); // NaN

let score4 = true;

console.log(typeof score4); // boolean

let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4); // 1

let score5 = "Debnath";

console.log(typeof score5); 

let valueInNumber5 = Number(score5);
console.log(typeof valueInNumber5);
console.log(valueInNumber5); // NaN

/* 
"22" => 22
"22abc" => NaN
true => 1
false => 0
*/

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/*
1 => true
0 => false
"" => false
"Debnath" => true 
*/

let someNumber = 22

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
