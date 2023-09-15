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