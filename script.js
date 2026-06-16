let firstOperand = '';
let secondOperand = '';
let operator = '';
let total = 0;
let numBuffer = ``;

const numButtons = document.querySelector('#num-buttons');
const opButtons = document.querySelector('#op-buttons');
const screenText = document.querySelector('#screen-text');

function add(firstOp, secondOp) {
    let result = firstOp + secondOp;
    return result;
}

function subtract(firstOp, secondOp) {
    let result = firstOp - secondOp;
    return result;
}

function multiply(firstOp, secondOp) {
    let result = firstOp * secondOp;
    return result;
}

function divide(firstOp, secondOp) {
    let result = firstOp / secondOp;
    return result;
}

function operate(fOP, sOP, op) {
    let equal = 0;
    switch (op) {
        case '+':
            equal = add(fOP, sOP);
            return equal;
            break;
        case '-':
            equal = subtract(fOP, sOP);
            return equal;
            break;
        case '*':
            equal = multiply(fOP, sOP);
            return equal;
            break;
        case '/':
            equal = divide(fOP, sOP);
            return equal;
            break;
        default:
            console.log('Please try again');
            return equal = 0;
            break;
    }
}

function updateNum(newStr) {
    if (newStr === '.') {
        if (numBuffer.includes('.')) {
            return;
        }
        if (numBuffer === '') {
            numBuffer = 0;
        }
    }
    total = 0;
    numBuffer = `${numBuffer}${newStr}`;
    screenText.textContent = numBuffer;
}

function evaluate(nextOP) {
    if (nextOP === '+' || nextOP === '-' || nextOP === '*' || nextOP === '/') {
        if (numBuffer !== '') {
            if (firstOperand === '') {
                firstOperand = parseFloat(numBuffer);
            } else if (operator !== '') {
                secondOperand = parseFloat(numBuffer);
                total = operate(firstOperand, secondOperand, operator);
                firstOperand = total;
                screenText.textContent = total;
                secondOperand = '';
            }
            numBuffer = '';
        }
        operator = nextOP;
        screenText.textContent = nextOP;
    } else if (nextOP === '=') {
        if (firstOperand !== '' && operator !== '' && numBuffer !== '') {
            secondOperand = parseFloat(numBuffer);
            total = operate(firstOperand, secondOperand, operator);
            screenText.textContent = total;
            firstOperand = '';
            secondOperand = '';
            numBuffer = '';
            operator = '';
        }
    }
}

numButtons.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case 'seven':
            updateNum(7);
            break;
        case 'eight':
            updateNum(8);
            break;
        case 'nine':
            updateNum(9);
            break;
        case 'four':
            updateNum(4);
            break;
        case 'five':
            updateNum(5);
            break;
        case 'six':
            updateNum(6);
            break;
        case 'one':
            updateNum(1);
            break;
        case 'two':
            updateNum(2);
            break;
        case 'three':
            updateNum(3);
            break;
        case 'zero':
            updateNum(0);
            break;
        case 'dot':
            updateNum('.');
            break;
        case 'clear':
            firstOperand = '';
            secondOperand = '';
            operator = '';
            total = 0;
            numBuffer = ``;
            screenText.textContent = ``;
            break;
        default:
            console.log("There is an error in numbers though");
            break;
    }
});

opButtons.addEventListener('click', (event) => {
    let target2 = event.target;

    switch (target2.id) {
        case 'divide':
            evaluate('/');
            break;
        case 'multiply':
            evaluate('*');
            break;
        case 'subtract':
            evaluate('-');
            break;
        case 'add':
            evaluate('+');
            break;
        case 'equal':
            evaluate('=');
            break;
        default:
            console.log('There is an error in operations though');
            break;
    }
});
