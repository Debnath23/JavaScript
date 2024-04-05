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

// The function addOne you've declared is a post-increment function. In JavaScript, the post-increment operator (num++) increments the value of num, but it returns the original value before the increment. Therefore, in your function, return num++ will return the original value of num, not the incremented value.

// console.log(addTwo(5)) {Hosting}

// In JavaScript, function declarations are hoisted to the top of their scope, which means you can use the function before it's declared. However, function expressions (such as the one you're using with const addTwo) are not hoisted in the same way.

// The problem is that when the console.log(addTwo(5)); line is executed, addTwo is still undefined because it's a constant declared using a function expression, and function expressions are not hoisted like function declarations.

const addTwo = function(num){ //Expression
    return (num + 2)
}
console.log(addTwo)
console.log(addTwo(5))