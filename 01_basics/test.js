const accountId = 12345;
let email = "deb@gmail.com";
var password = "123";
city = "Kolkata";
let state;

// accountId = 23456 is not allowed because of const keyword

email = "mahapatra@gmail.com";
password = "232323";
city = "Bengaluru";

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.log([accountId, email, password, city, state]);
console.table([accountId, email, password, city, state]);