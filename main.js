// /*OPERATIONS OBJECT*/
// import operations from "./operations.js";

/*DOCUMENT ELEMENTS*/
const numbers = document.querySelectorAll('.key__number');
const operators = document.querySelectorAll('.key__operator');
const clear = document.querySelector('.clear__display');
const erase = document.querySelector('.erase__number');
const result = document.querySelector('.key__results');

/*OPERATIONAL NUMBERS*/
let numberOne = [];
let numberTwo = [];

for(let i = 0; i <= numbers.length - 1; i++){
    numbers[i].addEventListener('click', () => {
        numberOne.push(numbers[i].innerHTML);
        console.log(...numberOne);
    });
};
