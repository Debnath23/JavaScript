/* JavaScript array-copy operations create shallow copies.
(All standard built-in copy operations with any JavaScript objects create shallow copies,
rather than deep copies). */

const myArray = new Array(0, 1, 2, 3, 4, 5);
console.log(myArray);

myArray.push(5);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift(6);
console.log(myArray);

myArray.shift();
console.log(myArray);

console.log(myArray.includes(4));
console.log(myArray.includes(6));

console.log(myArray.indexOf(3));

const newArray = myArray.join();

console.log(myArray);
console.log(newArray);
console.log(typeof newArray);

/* Slice && Splice */
console.log("A: ", myArray);

const myn1 = myArray.slice(1, 3);
console.log("B: ", myArray);

const myn2 = myArray.splice(1, 3); // Manupulating the array
console.log("C: ", myArray);
console.log(myn2);
