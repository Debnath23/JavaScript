console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);


const chai = {
    name: "Ginger Chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai is not ready")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name', {
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`)
    }
}

Object.defineProperty(chai, 'price', {
    enumerable: false
})

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`)
    }
}