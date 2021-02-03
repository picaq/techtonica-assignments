// https://www.w3schools.com/jsref/jsref_obj_date.asp

// import { DateTime } from 'luxon';
// DateTime.local();

// Independent Practice
let birthday = new Date(1992, 1, 29, 10);
let birthdog = new Date(1995, 10, 5);
let realBirthday = new Date(1992, 0, 29, 10);
let labor = new Date(1992, 0, 29, 9);
let month = birthday.getMonth() + 1;
let dayWeek = birthday.getDay();
let dayDate = birthday.getDate();
let year = birthday.getFullYear();

// console.log({birthday});
// console.log({month});
// console.log({dayWeek});
// console.log({dayDate});

let numberDate = `${month} / ${dayDate} / ${year}`;

console.log({numberDate});

// let stringDate = `${month.toString()} ${dayDate.toString()}, ${year.toString()}`

let stringDate = birthday.toDateString();

console.log({stringDate});

// Challenge
// If you add (date1 + date2) or subtract (date1 - date2) two dates in JavaScript, it returns the time difference in milliseconds. Can you write a function to subtract two dates but return the time difference in minutes? What about as a date object?

// console.log(birthdog-birthday);
let minuteDiff = function( lateDate, earlyDate ) {
    let msDiff = lateDate - earlyDate;
    return msDiff / 1000 / 60;
}
// console.log(minuteDiff(birthday, realBirthday));
let a = [birthdog, realBirthday];
let b = [birthday, realBirthday];
let c = [realBirthday, labor];

let testcases = [
    a, b, c
];

for ( let parameters of testcases ) {
    console.log(minuteDiff(...parameters));
}
