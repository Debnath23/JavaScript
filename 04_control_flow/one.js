/* Falsy Values:  false, 0, -0, BigInt 0n, "", null, undefined, NaN
   Truthy Values: true, "0", 'false', " ", [], {}, Function(){} -> Empty Function,
*/

// Cheaking of an Empty array

const arr = [];
if (arr.length === 0) {
    console.log("Empty Array");
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Empty Object");
}

/* false == 0
   false == ""
   0 == ""
   0 == ''
   All returns true */

/* Nullish Coalescing Operator (??): null, undefined */

let val1;
val1 = 5 ?? 10
console.log(val1);

let val2;
val2 = null ?? 10
console.log(val2);

let val3;
val3 = undefined ?? 15
console.log(val3);

let val4;
val4 = undefined ?? 20 ?? 30
console.log(val4);

let val5;
val5 = undefined ?? null ?? 40
console.log(val5);

/* Terniary Operator:    condition ? true : false */

const price = 100
price >= 80 ? console.log(`Greater than 80`) : console.log(`Less than 80`);