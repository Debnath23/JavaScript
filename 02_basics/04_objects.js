/* const user = new Object(); */

const user = {};
user.name = "Debnath";
user.id = "123abc";
user.isLoggedIn = false;

console.log(user);

const regularUser = {
    email: "debnath@gmail.com",
    fullname:{
        userFullName:{
            firstName: "Debnath",
            lastName: "Mahapatra"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName);
console.log(regularUser.fullname?.userFullName.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};

/* const obj3 = Object.assign({}, obj1, obj2, obj4); */

const obj3 = {...obj1, ...obj2, ...obj4};
console.log(obj3);

const users = [
    {
        id: 1,
        email: "denmath1@gmail.com"
    },
    {
        id: 2,
        email: "denmath2@gmail.com"
    },
    {
        id: 3,
        email: "denmath3@gmail.com"
    }
]

console.log(users[0].email);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLoggedIn'));
console.log(user.hasOwnProperty('isLogged'));