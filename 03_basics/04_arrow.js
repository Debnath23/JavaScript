const user = {
    name: "Debnath",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.name},welcome to this website.`);
        console.log(this);
    }
}

user.welcomeMessage();
user.name = "Ram";
user.welcomeMessage();

console.log(this); /* => {} empty object ,Global object in browser is 'Window' */

function one(){
    const username = "Debnath"
    console.log(this.username);
}
one()

const two = function(){
    const username = "Debnath"
    console.log(this.username);
}
two()

const three = () => { /* => Arrow Function */
    const username = "Debnath"
    console.log(this.username);
    console.log(this);
}
three()

/* => Arrow Function */

/* Explesit Return */
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 5));

/* Implesit Return */
const addTwo1 = (num1, num2) =>  (num1 + num2)
console.log(addTwo1(7, 5));

/* Object Return */

const obj = () => ({username: "Debnath"})
console.log(obj());
console.log(obj);
