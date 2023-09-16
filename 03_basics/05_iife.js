/* Immediately Invoked Function Expressions (IIFE): 
To call a function imediately and avoid the pollution of global scope */

/* (
    Function Defination
    )(Function Call); */

(function db(name){ /* Named IIFE */
    console.log(`DB Connected, ${name}`);
})("Debnath");


((name) => {
    console.log(`DB Connected, ${name}`);
})("Debnath");