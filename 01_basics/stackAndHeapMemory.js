/*
Stack => used for Primitive datatypes
Heap => used for Non-Primitive datatypes
*/

let name = "Debnath";
let anotherName = name; /*Instead of giving reference,the copy of the data is to be given,
so we can't change the original data or value.*/
anotherName = "Mahapatra";

console.log(name);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne; /* Both userOne and userTwo refered same value or data,
so if we change in any one both are changed.*/

userTwo.email = "debnath@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);