"use strict";

// const input = 360000;
// let numOfFive, numOfTen, numOfOne;
// let reminder, reminder_two, reminder_three;
// if (input > 50000) {
//   numOfFive = Math.floor(input / 50000);
//   reminder = numOfFive % 50000;
// } else if (reminder >= 10000) {
//   numOfTen = Math.floor(reminder / 10000);
//   reminder_two = numOfTen % 10000;
// } else if (reminder_two >= 1000) {
//   numOfOne = Math.floor (reminder_two / 1000) ;
//   reminder_three = numOfOne % 1000;
// } else {
//   console.log(" Fuck ");
// }

// console.log(`you have ${numOfFive} fifty , ${numOfTen} ten , ${numOfOne} One`);
 
// *************************************************************************************

const input = +prompt("Enter your number :");
let numOfFive, numOfTen, numOfOne;
let reminder = input, reminder_two, reminder_three;

if (reminder >= 50000) {
    numOfFive = Math.floor(reminder / 50000);
    reminder = reminder % 50000;
}

if (reminder >= 10000) {
    numOfTen = Math.floor(reminder / 10000);
    reminder = reminder % 10000;
}

if (reminder >= 1000) {
    numOfOne = Math.floor(reminder / 1000);
}

alert(`you have ${numOfFive || 0} fifty , ${numOfTen || 0} ten , ${numOfOne || 0} One`);
