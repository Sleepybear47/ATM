"use strict";
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
