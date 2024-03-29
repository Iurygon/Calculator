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

/*  KEYBOARD VALUES
    VALORES DO TECLADO
*/
const keyNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const keyOperators = ['+', '-', '/', '*'];
const keyClear = [' ', 'c', 'C'];
const keyErase = ['Backspace', 'Delete'];
const keyResult = ['=', 'Enter'];

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
function eraseValue(){
    if(operatorValue === ''){
    numberOne.pop();
    showNumbers(formatString(numberOne));
    }
    else{
        numberTwo.pop();
        showNumbers(formatString(numberTwo));
    };
};

function clearValues(){
    numberOne = [];
    numberTwo = [];
    operatorValue = '';
    showNumbers('0');
    clearStoredVar();
};

erase.addEventListener('click', eraseValue);
clear.addEventListener('click', clearValues);

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
function calculateResults(){    
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
};

result.addEventListener('click', calculateResults);

/*  KEYBOARD COMMANDS
    COMANDOS DO TECLADO
*/
window.addEventListener('keyup', (event) => {
    if(keyNumbers.includes(event.key)){
            if(operatorValue === ''){
                numberOne.push(event.key);
                showNumbers(formatString(numberOne));
                clearStoredVar();
            }
            else{
                numberTwo.push(event.key);
                showNumbers(formatString(numberTwo));
            };
    }
    else if(keyErase.includes(event.key)){
        eraseValue();
    }
    else if(keyClear.includes(event.key)){
        clearValues();
    }
    else if(keyOperators.includes(event.key)){
        if(event.key == '/'){
            operatorValue = 'division';
        }
        else if(event.key == '*'){
            operatorValue = 'multiplication';
        }
        else if(event.key == '-'){
            operatorValue = 'subtraction';
        }
        else if(event.key == '+'){
            operatorValue = 'sum';
        };
        storedVar[0].innerHTML = formatString(numberOne);
        storedVar[1].innerHTML = event.key;
    }
    else if(keyResult.includes(event.key)){
        calculateResults();
    }
});
