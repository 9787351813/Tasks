document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    // Function to clear the result field
    const clearResult = () => {
        currentInput = '';
        operator = '';
        firstOperand = '';
        secondOperand = '';
        result.value = '';
    };

    // Function to handle number and decimal input
    const handleNumber = (number) => {
        if (operator === '') {
            firstOperand += number;
            currentInput = firstOperand;
        } else {
            secondOperand += number;
            currentInput = secondOperand;
        }
        result.value = currentInput;
    };

    // Function to handle operator input
    const handleOperator = (op) => {
        if (firstOperand === '') return;
        operator = op;
        currentInput = '';
    };

    // Function to perform calculation
    const calculate = () => {
        if (firstOperand === '' || secondOperand === '' || operator === '') return;
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(secondOperand);
        let calcResult;

        switch (operator) {
            case '+':
                calcResult = num1 + num2;
                break;
            case '-':
                calcResult = num1 - num2;
                break;
            case '*':
                calcResult = num1 * num2;
                break;
            case '/':
                calcResult = num1 / num2;
                break;
            default:
                return;
        }

        result.value = calcResult;
        firstOperand = calcResult.toString();
        secondOperand = '';
        operator = '';
    };

    // Adding event listeners to the buttons
    document.getElementById('clear').addEventListener('click', clearResult);

    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'decimal'].forEach(id => {
        document.getElementById(id).addEventListener('click', (e) => {
            handleNumber(e.target.textContent);
        });
    });

    ['add', 'subtract', 'multiply', 'divide'].forEach(id => {
        document.getElementById(id).addEventListener('click', (e) => {
            handleOperator(e.target.textContent);
        });
    });

    document.getElementById('equal').addEventListener('click', calculate);
});
