const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const nums = myNums.map( (num) => num + 10)
console.log(nums)

const numbers = myNums
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 50)
console.log(numbers)