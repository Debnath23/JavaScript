/* depanding upon how the data is stored and accessed the data,there are two datatype:
Primitive datatype(Call by value) and Non-Primitive datatype(Call by reference).

Primitive: When we want to copy it,instead of giving the original data's memory referrence,
giving a copy of the data and we can change the copy.

7 Primitive datatypes: String, Number, Boolean, null(not empty, not empty string), undefined(variable declared,memory allocated but value is not given), Symbol, BigInt.

Reference type(Non-Primitive): Arrays, Objects, Functions.

*/

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNum = 1234567890n;

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Debnath",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}