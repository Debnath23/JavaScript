/* const array1 = [1, 2, 3, 4];
0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1
                       .reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWithInitial);
Expected output: 10 */

const myNums = [1, 2, 3, 4]

/* const total = myNums.reduce(function (acc, currVal){
    console.log(`acc: ${acc} and currVal: ${currVal}`)
    return acc + currVal
}, 0) */

const total = myNums.reduce( (acc, currVal) => acc + currVal, 0)
console.log(total)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay)