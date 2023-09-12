const name = "Debnath";
const repoCount = 10;

console.log(name + " " + repoCount + " Value"); // Outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Debnath"); //Another type of String declaration as Object.

console.log([gameName[0], gameName.__proto__, gameName.length, gameName.toLocaleUpperCase()]);
console.table([gameName[0], gameName.__proto__, gameName.length, gameName.toLocaleUpperCase()]);

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-6,4);
console.log(anotherString);

const newStringOne = "   Debnath   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://debnath.com/debnath%20mahpatra";

console.log(url.replace('%20', '-'));

console.log(url.includes('debnath'));

const gameNameTwo = new String("Deb-nath-Maha-patra");
console.log(gameNameTwo.split('-'));