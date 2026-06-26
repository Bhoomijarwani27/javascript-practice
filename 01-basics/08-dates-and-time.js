// DATES 

let myDate = new Date();
console.log(myDate);// it give current date and time 
// 2026-06-19T12:34:56.789Z

console.log(myDate.toString()); // it give current date and time in string format
// Fri Jun 19 2026 12:34:56 GMT+0000 (Coordinated Universal Time) like india time zone it will show GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // it give current date in string format
// Fri Jun 19 2026

console.log(myDate.toLocaleString()); // it give current time in string format
// 12:34:56 PM GMT+0000 (Coordinated Universal Time)
console.log(typeof myDate); // object

let myCreateDate = new Date(2026,0,23); 
console.log(myCreateDate.toDateString()); // Fri Jan 23 2026

let myCreateDate2 = new Date(2026,0,23,5,30,45);
console.log(myCreateDate2.toLocaleString()); // 23/1/2026, 5:30:45 AM

let typeOfDate1 = new Date("2026-01-23");
console.log(typeOfDate1.toLocaleString()); // 23/1/2026, 12:00:00 AM 
let typeOfDate2 = new Date("01-23-2026(5:30:45)");
console.log(typeOfDate2.toLocaleString()); // 23/1/2026 
// dd/mm/yyyy format is not valid in date constructor it will give invalid date
// mm-dd-yyyy vaild 
// yyyy-mm-dd vaild 

let mytimestamp = Date.now();
console.log(mytimestamp); // it give current timestamp in milliseconds
console.log(myCreateDate.getTime()); // it give timestamp of that date in milliseconds 
console.log(Date.now()/1000); // it give current timestamp in seconds but it is not accurate because it is in decimal format
console.log(Math.floor(Date.now()/1000)); // it give current timestamp in seconds and it is accurate because it is in integer format


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // it give current month in number format 0-11
console.log(newDate.getFullYear()); // it give current year
console.log(newDate.getDate()); // it give current date

console.log(`${newDate.getDay()} and the time`); // it give current day in number format 0-6 (0-Sunday, 1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday)
 
console.log(newDate.toLocaleString('default', {
    weekday: "long"
})
);
