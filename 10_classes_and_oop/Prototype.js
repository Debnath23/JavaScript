let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.debnath = function(){
    console.log(`Debnath is present in all objects`);
}

Array.prototype.heyDebnath = function(){
    console.log(`Debnath says Hello!`);
}

heroPower.debnath()
myHeros.debnath()
myHeros.heyDebnath()
//heroPower.heyDebnath()

const User = {
    name: "Debnath",
    email: "debnath@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User;

// morden syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Debnath     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Mahapatra".trueLength()
"iceTea".trueLength()