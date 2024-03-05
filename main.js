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
const storagedVar = document.querySelectorAll('.storaged__variable');

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

/*  FUNCTIONS TO SHOW THE VALUES ON DISPLAY
    FUNÇÕES PARA MOSTRAR OS RESULTADOS NA TELA
*/

function showNumbers(num){
    display.innerHTML = num;
};

function formatString(string){
    return string.join().replaceAll(',', '');
}

/*  DEFINES THE VALUE OF THE OPERATION NUMBERS
    DEFINE O VALOR DOS NÚMEROS DA OPERAÇÃO
*/
for(let i = 0; i <= numbers.length - 1; i++){
    numbers[i].addEventListener('click', () => {
        if(operatorValue === ''){
            numberOne.push(numbers[i].innerHTML);
            showNumbers(formatString(numberOne));
            for(let j = 0; j <= storagedVar.length - 1; j++){
                storagedVar[j].innerHTML = ''
            };
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
    showNumbers('0')
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
        storagedVar[0].innerHTML = formatString(numberOne);
        storagedVar[1].innerHTML = operators[i].innerHTML;
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
    /*  SHOWS WHICH NUMBER AND OPERATION WAS SETLED
        MOSTRA QUAL NÚMERO E OPERAÇÃO FORAM DEFINIDOS
    */
    storagedVar[2].innerHTML = formatString(numberTwo);

    showNumbers(finalResult)
    numberOne = [];
    numberTwo = [];
    operatorValue = '';
});