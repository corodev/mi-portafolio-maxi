const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = null;
let firstValue = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (!isNaN(value) || value === '.') {
            if (currentInput.includes('.') && value === '.') return;
            currentInput += value;
            updateDisplay();
        } else if (value === 'AC') {
            resetCalculator();
        } else if (value === 'DE') {
            currentInput = currentInput.slice(0, -1);
            if (currentInput === '') currentInput = '0';
            updateDisplay();
        } else if (value === '=') {
            if (operator && firstValue !== null) {
                calculate();
                operator = null;
            }
        } else {
            handleOperator(value);
        }
    });
});

function updateDisplay() {
    display.textContent = currentInput || '0';
}

function resetCalculator() {
    currentInput = '';
    operator = null;
    firstValue = null;
    updateDisplay();
}

function handleOperator(op) {
    if (currentInput === '') return;
    if (firstValue !== null) {
        calculate();
    }
    firstValue = parseFloat(currentInput);
    operator = op;
    currentInput = '';
}

function calculate() {
    const secondValue = parseFloat(currentInput);
    let result = 0;
    switch (operator) {
        case '+': result = firstValue + secondValue; break;
        case '-': result = firstValue - secondValue; break;
        case '*': result = firstValue * secondValue; break;
        case '/': result = firstValue / secondValue; break;
        case '%': result = firstValue % secondValue; break;
    }
    currentInput = result.toString();
    firstValue = null;
    updateDisplay();
}

updateDisplay();