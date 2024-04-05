var c = 300;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    c = 30;
}

// console.log(a);
// console.log(b);
console.log(c);

/* let and const have block-level scope, meaning they are only accessible within the block they are defined in.
var has function-level scope, meaning it's accessible throughout the entire function in which it is defined or globally if defined outside any function.

a is declared using let inside the if block. Therefore, it's not accessible outside the block. So, console.log(a) will throw a ReferenceError.
b is declared using const inside the if block. Similar to let, it's not accessible outside the block. So, console.log(b) will also throw a ReferenceError.
c is declared using var, which has function-level scope. So, when you declare c inside the if block, it actually modifies the outer c variable. Therefore, console.log(c) will print 30. */

function one(){
    const username = "Debnath"

    function two(){
        const website = "YouTube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()

if (true) {
    const username = "Debnath"
    if (username === "Debnath") {
        const website = "YouTube"
        console.log(`${username} ${website}`)
    }
    //console.log(website)
}
//console.log(username);

console.log(addOne(5))
function addOne(num){
    return num++
}

// console.log(addTwo(5)) {Hosting}
const addTwo = function(num){ //Expression
    return (num + 2)
}
console.log(addTwo)
console.log(addTwo(5))