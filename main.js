// /*OPERATIONS OBJECT*/
// import operations from "./operations.js";

/*  DOCUMENT ELEMENTS
    ELEMENTOS DO DOCUMENTO
*/
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.key__operator');
const clear = document.querySelector('.clear__display');
const erase = document.querySelector('.erase__number');
const result = document.querySelector('.key__results');
const display = document.querySelector('.display__text');

/*  OPERATION NUMBERS
    NÚMEROS DA OPERAÇÃO
*/
let numberOne = [];
let numberTwo = undefined;

/*  CHOOSED OPERATOR
    OPERADOR ESCOLHIDO
*/
let operatorValue = '';


/*----------------------------------------------------------------------------------------------*/


/*  DEFINES THE VALUE OF THE OPERATION NUMBERS
    DEFINE O VALOR DOS NÚMEROS DA OPERAÇÃO
*/
for(let i = 0; i <= numbers.length - 1; i++){
    numbers[i].addEventListener('click', () => {
        numberOne.push(numbers[i].innerHTML);


        console.log(numberOne.join().replaceAll(',', ''));
    
    
    });
};

/*  DEFINES WHAT CLEAR AND ERASE KEYS WILL DO
    DEFINE O QUE AS TECLAS CLEAR E ERASE VÃO FAZER
*/
erase.addEventListener('click', () => {
    numberOne.pop();
    console.log(numberOne.join().replaceAll(',', ''));
});

clear.addEventListener('click', () => {
    numberOne = [];
    console.log(numberOne.join().replaceAll(',', ''));
});

/*  DEFINES WHICH OPERATION WILL BE EXECUTED
    DEFINE QUAL OPERAÇÃO SERÁ EXECUTADA
*/
for(let i = 0; i <= operators.length - 1; i++){
    operators[i].addEventListener('click', () => {
        if(operators[i].innerHTML == '/'){
            operatorValue = 'division';
        }
        else if(operators[i].innerHTML == '*'){
            operatorValue = 'multiplication';
        }
        else if(operators[i].innerHTML == '-'){
            operatorValue = 'subtraction';
        }
        else if(operators[i].innerHTML == '+'){
            operatorValue = 'sum';
        };
        numberTwo = numberOne.join().replaceAll(',', '');
        numberOne = [];
        console.log(numberTwo)
        console.log(numberOne)
    });
};