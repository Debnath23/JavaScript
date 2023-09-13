const merval_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"];

/* merval_heroes.push(dc_heroes);
console.log(merval_heroes);
console.log(merval_heroes[3][1]); */

const allHeroes = merval_heroes.concat(dc_heroes);
console.log(allHeroes);

const all_new_heroes = [...merval_heroes, ...dc_heroes];
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12, 13], 14], 15];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

console.log(Array.isArray("Debnath"));
console.log(Array.from("Debnath"));

console.log(Array.from({name: "Debnath"})); /* For Interview */

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));