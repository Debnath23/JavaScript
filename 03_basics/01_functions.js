function  addTwoNumbers1(num1, num2){
    console.log(num1 + num2);
}

const result = addTwoNumbers1(3, 5);
console.log("Result: ", result);

function  addTwoNumbers2(num1, num2){
    return (num1 + num2);
    console.log("Debnath");
}

const result2 = addTwoNumbers2(7, 3);
console.log("Result: ", result2);

function loginUserMessage(username){
    /* if(username === undefined){
        console.log("Please enter a username");
        return;
    } */
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} is just logged in.`
}

console.log(loginUserMessage("Debnath"));
console.log(loginUserMessage());

function loginUserMessage2(username = "Debnath"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} is just logged in.`
}

console.log(loginUserMessage2("Mahapatra"));
console.log(loginUserMessage2());