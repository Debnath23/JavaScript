let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 8, 12);
console.log(myCreatedDate.toLocaleString());

let myCreatedDate1 = new Date(2023, 8, 12, 5, 3);
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2023-09-12");
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("09-12-2023");
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.toLocaleString());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`${newDate.toLocaleString()} is the date.`);

let newDate1 = newDate.toLocaleString('default',{
    weekday: "long"
});
console.log(newDate1);