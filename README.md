# JavaScript
A code repository for JavaScript

## Difference between normal function and arrow function
### 1. No arguments object in arrow functions
### 2. Arrow functions do not create their own this binding
### 3. Arrow functions cannot be used as constructors
### 4. Arrow functions cannot be declared
### 5. Arrow functions cannot be accessed before initialization
### https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/


## Hoisting
#### Hoisting is a concept where a variable or function is lifted to the top of its global or local scope before the whole code is executed. This makes it possible for such a variable/function to be accessed before initialization. Here's a function example:

printName()

console.log("hello")

function printName() {
  console.log("i am dillion")
}

// i am dillion
// hello

As you can see here, we called printName before it was actually declared in the code. But we don't get any errors. printName() is executed (logging "i am dillion" to the console) before console.log("hello").

What happens here is hoisting.

The printName function is raised to the top of the global scope (the scope it is declared in) before the whole code is executed, thereby making it possible to execute the function earlier.

But not all kinds of functions can be accessed before initialization. All functions and variables in JavaScript are hoisted, but only declared functions can be accessed before initialization.

printName()

console.log("hello")

var printName = () => {
  console.log("i am dillion")
}

// TypeError: printName is not a function

Here, we have declared the printName variable with var. The error we get now is TypeError: printName is not a function. The reason for this is that variables declared with var are hoisted and accessible, but they have a default value of undefined. So attempting to access printName before the line it was initialized with the function expression is interpreted as undefined(), and as you know, "undefined is not a function".


## Hoisting in JavaScript with let and const – and How it Differs from var
#### https://www.freecodecamp.org/news/javascript-let-and-const-hoisting/

const printHello = () => {
  console.log("hello")
}

printName is not a declared function. It is a variable, declared with const which is assigned a function expression. Variables declared with let and const are hoisted, but they cannot be accessed before the line they are initialized