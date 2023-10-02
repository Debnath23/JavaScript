/* Object Literals */

const user = {
    username: 'Debnath',
    loginCount: 6,
    signsdIn: true,

    getUserDtails: function(){
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDtails());
console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username  =  username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this /* Defined implicitly */
}

/* 
   new keyword => 
   created a empty object that is instance(or object: {}),
   a constructor function is called because of new keyword which packed up all arguments,
   then all arguments are injected
   in the this keyword,
   and receives it in the function
*/

const userOne = new User("Debnath", 10, true);
const userTwo = new User("Mahapatra", 12, false);

console.log(userOne);
console.log(userOne.greeting());
console.log(userTwo);
console.log(userTwo.greeting());

console.log(userOne.constructor);