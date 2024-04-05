function calculateCartPrice(...num){
    return num;
}

console.log(calculateCartPrice(100, 300, 500, 2000));

function calculateCartPrice2(val1, val2, ...num){
    return num;
}

console.log(calculateCartPrice2(100, 300, 500, 2000));

//When you call calculateCartPrice2 with arguments 100, 300, 500, and 2000, it ignores the first two arguments (val1 and val2) and collects the rest into the array num. Then, it returns this array.

const user = {
    name: "Debnath",
    age: 22
}

function handleObject(anyObject){
    console.log(`${anyObject.name}'s age is ${anyObject.age}`);
}

handleObject(user);

function handleObject2(anyObject){
    console.log(`${anyObject.name}'s age is ${anyObject.age}`);
}

handleObject2({
    name: "Ram",
    age: 20
});

function returnSecondValue(getArray){
   return getArray[1];
}

console.log(returnSecondValue([1, 2, 3, 4]));