/* For of loop */

// ["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}


const arr1 = [1, 2, 3, 4, 5]
for (const num of arr1) {
    console.log(arr1[num]);
}

const arr2 = [1, 2, 3, 4, 5]
for (const num of arr2) {
    console.log(arr2);
}

const greeting = "Hello world!"
for (const greet of greeting) {
    console.log(greet);
}


/* Map */

const map = new Map() //Unique Value accepted
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR',  "France")
map.set('IN', "India")

console.log(map);

for (const [key, value] of map) { // Array Destructure
    console.log(`${key} -> ${value}`);
}

/* const myObject = {
    'game1': "NFS",
    'game2': "Spiderman"
}

for (const [key, value] of myObject) { 
    console.log(`${key} -> ${value}`);
}  

        Object can't be iterated using for of loop
*/
