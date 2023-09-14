/* Singleton(Constructor) => Object.creat();*/ 

/* Object Literals*/

const mySymbol = Symbol("Key1");

const JsUser = {
    name: "Debnath",
    "Full name": "Debnath Mahapatra",
    age: 22,
    [mySymbol]: "myKey1",
    location: "Kolkata",
    email: "debnath@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full name"]);
console.log(JsUser[mySymbol]);

JsUser.email = "debnath@chatgpt.com";
//Object.freeze(JsUser);
JsUser.email = "debnath@microsoft.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());