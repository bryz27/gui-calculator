let firstOperand;
let secondOperand;
let operator;

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
    let result = secondOp / firstOp;
    return result;
}

function operate(fOP, sOP, op) {
    let equal;
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
            break;
    }
}