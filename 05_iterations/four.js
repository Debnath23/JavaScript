const coding = ["js", "py", "java", "c++"]

const values = coding.forEach( (item) => {  /* forEach doesn't return any value */
    return item
}) 

console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => num > 4) /* filter returns some values,callback function,forEach*/
console.log(newNums);

const newNums1 = myNums.filter( (num) => {
    return num > 4 /* In scope we must to return */
}) 
console.log(newNums1);

const newNums2 = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums2.push(num)
    }
})

console.log(newNums2);