const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Debnath", email: "debnath@google.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                username: "Debnath Mahapatra",
                password: 12345
            })
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((usernme) => {
    console.log(usernme)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("The promise is either resolved or rejected")
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                username: "Debnath Mahapatra",
                password: 12345
            })
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const responce = await promiseFive
        console.log(responce);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
    try{
        const responce = await fetch('https://api.github.com/users/Debnath23');
        const data = await responce.json();
        console.log(data);
    }
    catch(error){
        console.log("E: ", error);
    }
}

getAllUsers();


fetch('https://api.github.com/users/Debnath23')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
