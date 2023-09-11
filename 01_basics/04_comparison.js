console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0); //false => NaN
console.log(null == 0); //false => NaN
console.log(null >= 0); // true => Comparisons convert null to a number, treating it as 0.

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// Strict cheack ===
console.log("2" === 2);