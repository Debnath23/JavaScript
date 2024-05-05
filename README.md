# JavaScript
A repository for JavaScript

## Difference between normal function and arrow function
### 1. No arguments object in arrow functions
### 2. Arrow functions do not create their own this binding
### 3. Arrow functions cannot be used as constructors
### 4. Arrow functions cannot be declared
### 5. Arrow functions cannot be accessed before initialization
### https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/


## Hoisting
#### Hoisting is a concept where a variable or function is lifted to the top of its global or local scope before the whole code is executed. This makes it possible for such a variable/function to be accessed before initialization. Here's a function example:

### printName()
### console.log("hello")
### function printName() {
###  console.log("i am dillion")
### }
### // i am dillion
### // hello

### As you can see here, we called printName before it was actually declared in the code. But we don't get any errors. printName() is executed (logging "i am dillion" to the console) before console.log("hello").

### What happens here is hoisting.

### The printName function is raised to the top of the global scope (the scope it is declared in) before the whole code is executed, thereby making it possible to execute the function earlier.

### But not all kinds of functions can be accessed before initialization. All functions and variables in JavaScript are hoisted, but only declared functions can be accessed before initialization.

### printName()
### console.log("hello")

### var printName = () => {
###  console.log("i am dillion")
### }
### // TypeError: printName is not a function

### Here, we have declared the printName variable with var. The error we get now is TypeError: printName is not a function. The reason for this is that variables declared with var are hoisted and accessible, but they have a default value of undefined. So attempting to access printName before the line it was initialized with the function expression is interpreted as undefined(), and as you know, "undefined is not a function".


## Hoisting in JavaScript with let and const – and How it Differs from var
### https://www.freecodecamp.org/news/javascript-let-and-const-hoisting/

### const printHello = () => {
###  console.log("hello")
### }

### printName is not a declared function. It is a variable, declared with const which is assigned a function expression. Variables declared with let and const are hoisted, but they cannot be accessed before the line they are initialized


## Constructor:

### The constructor method is a special method of a class for creating and initializing an object instance of that class. A class method called constructor cannot be a getter, setter, async, or generator.

### A class cannot have more than one constructor method. A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.

### The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class — a SyntaxError is thrown if the class contains more than one occurrence of a constructor method. A constructor can use the super keyword to call the constructor of the super class.

### class Polygon {
###  constructor() {
###    this.name = 'Polygon';
###   }
### }

### const poly1 = new Polygon();

### console.log(poly1.name);
### // Expected output: "Polygon"


## Classes

### Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

### The body of a class is the part that is in curly braces {}. This is where you define class members, such as methods or constructor. The body of a class is executed in strict mode even without the "use strict" directive.

### A class element can be characterized by three aspects:

### Kind: Getter, setter, method, or field

### Location: Static or instance

### Visibility: Public or private

## Prototype:

### Prototypes are the mechanism by which JavaScript objects inherit features from one another.The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. The standard way to access an object's prototype is the Object.getPrototypeOf() method. Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

## Binding

### In programming, a binding is an association of an identifier(An identifier is a sequence of characters in the code that identifies a variable, function, or property) with a value. Not all bindings are variables — for example, function parameters and the binding created by the catch (e) block are not "variables" in the strict sense. In addition, some bindings are implicitly created by the language — for example, this and new.target in JavaScript. A binding is mutable if it can be re-assigned, and immutable otherwise; this does not mean that the value it holds is immutable. A binding is often associated with a scope.

## this

### The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

### The value of this in JavaScript depends on how a function is invoked (runtime binding), not how it is defined. When a regular function is invoked as a method of an object (obj.method()), this points to that object. When invoked as a standalone function (not attached to an object: func()), this typically refers to the global object (in non-strict mode) or undefined (in strict mode). The Function.prototype.bind() method can create a function whose this binding doesn't change, and methods apply() and call() can also set the this value for a particular call.

### Arrow functions(An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.) differ in their handling of this: they inherit this from the parent scope at the time they are defined. This behavior makes arrow functions particularly useful for callbacks and preserving context. However, arrow functions do not have their own this binding. Therefore, their this value cannot be set by bind(), apply() or call() methods, nor does it point to the current object in object methods.

## New:

### The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

### When a function is called with the new keyword, the function will be used as a constructor. new will do the following things:

### 1. Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.
### 2. Points newInstance's [[Prototype]] to the constructor function's prototype property, if the prototype is an Object. Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]].
### 3. Executes the constructor function with the given arguments, binding newInstance as the this context (i.e. all references to this in the constructor function now refer to newInstance).
### 4. If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. Otherwise, if the constructor function doesn't return anything or returns a primitive, newInstance is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)


## Closures: 
### A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

### function init() {
###  var name = "Mozilla"; // name is a local variable created by init
###  function displayName() {
###   // displayName() is the inner function, that forms the closure
###    console.log(name); // use variable declared in the parent function
###  }
###  displayName();
### }
### init();

### init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().
