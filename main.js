// /*OPERATIONS OBJECT*/
import operations from "./operations.js";

/*  DOCUMENT ELEMENTS
    ELEMENTOS DO DOCUMENTO
*/
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.key__operator');
const clear = document.querySelector('.clear__display');
const erase = document.querySelector('.erase__number');
const result = document.querySelector('.key__results');
const display = document.querySelector('.display__text');
const storedVar = document.querySelectorAll('.stored__variable');

/*  OPERATION NUMBERS
    NÚMEROS DA OPERAÇÃO
*/
let numberOne = [];
let numberTwo = [];

/*  CHOOSED OPERATOR
    OPERADOR ESCOLHIDO
*/
let operatorValue = '';

/*  OPERATION RESULT
    RESULTADO DA OPERAÇÃO
*/
let finalResult = '';


/*----------------------------------------------------------------------------------------------*/

/*  DISPLAY FUNCTIONS
    FUNÇÕES DA TELA
*/

function showNumbers(num){
    display.innerHTML = num;
};

function formatString(string){
    return string.join().replaceAll(',', '');
};

function clearStoredVar(){
    for(let i = 0; i <= storedVar.length - 1; i++){
        storedVar[i].innerHTML = '';
    };
};

/*  DEFINES THE VALUE OF THE OPERATION NUMBERS
    DEFINE O VALOR DOS NÚMEROS DA OPERAÇÃO
*/
for(let i = 0; i <= numbers.length - 1; i++){
    numbers[i].addEventListener('click', () => {
        if(operatorValue === ''){
            numberOne.push(numbers[i].innerHTML);
            showNumbers(formatString(numberOne));
            clearStoredVar();
        }
        else{
            numberTwo.push(numbers[i].innerHTML);
            showNumbers(formatString(numberTwo));
        };
    });
};

/*  DEFINES WHAT CLEAR AND ERASE KEYS WILL DO
    DEFINE O QUE AS TECLAS CLEAR E ERASE VÃO FAZER
*/
erase.addEventListener('click', () => {
    if(operatorValue === ''){
        numberOne.pop();
        showNumbers(formatString(numberOne));
    }
    else{
        numberTwo.pop();
        showNumbers(formatString(numberTwo));
    };
});

clear.addEventListener('click', () => {
    numberOne = [];
    numberTwo = [];
    operatorValue = '';
    showNumbers('0');
    clearStoredVar();
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
        /*  SHOWS WHICH NUMBER AND OPERATION WAS SETLED
            MOSTRA QUAL NÚMERO E OPERAÇÃO FORAM DEFINIDOS
        */
        storedVar[0].innerHTML = formatString(numberOne);
        storedVar[1].innerHTML = operators[i].innerHTML;
    });
};

/*  CALCULATES AND SHOWS THE RESULT
    CALCULA E MOSTRA O RESULTADO
*/
result.addEventListener('click', () => {
    if(operatorValue === 'division'){
        finalResult = operations.division(formatString(numberOne), formatString(numberTwo));
    }
    else if(operatorValue === 'multiplication'){
        finalResult = operations.multiplication(formatString(numberOne), formatString(numberTwo));
    }
    else if(operatorValue === 'subtraction'){
        finalResult = operations.subtraction(formatString(numberOne), formatString(numberTwo));
    }
    else if (operatorValue === 'sum'){
        finalResult = operations.sum(formatString(numberOne), formatString(numberTwo));
    };
    /*  SHOWS WHICH NUMBER WAS SETLED
        MOSTRA QUAL NÚMERO FOI DEFINIDO
    */
    if(operatorValue === ''){
        clearStoredVar();
    }
    else{
        storedVar[2].innerHTML = formatString(numberTwo);
    };
    showNumbers(finalResult)
    numberOne = [];
    numberTwo = [];
    operatorValue = '';
    finalResult = '0';
});

/*
    NÚMEROS: PUXAR PELO PELA KEY, FUNCIONA TANTO PELO NUMPAD QUANTO PELO NÚMEROS ('0' A '9')
    OPERAÇÕES:
        SOMA -> KEY '+'
        SUBTRAÇÃO -> KEY '-'
        MULTIPLICAÇÃO -> KEY '*'        
        DIVISÃO -> KEY '/'
    APAGAR: CODE 'Backspace'
    CLEAR: CODE 'Space' OU CODE 'KeyC' 
    RESULT: KEY '=' OU CODE 'Enter'

*/