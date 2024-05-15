document.addEventListener('DOMContentLoaded', function() {
    let result = document.getElementById('result');
    let clear = document.getElementById('clear');
    let equal = document.getElementById('equal');
    let subtract = document.getElementById('subtract');
    let buttons = document.querySelectorAll('.calculator button');
    let currentOperation = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.id !== 'equal' && button.id !== 'clear') {
                result.value += button.textContent;
            }
        });
    });

    clear.addEventListener('click', function() {
        result.value = '';
        currentOperation = '';
    });

    equal.addEventListener('click', function() {
        try {
            result.value = eval(result.value);
        } catch {
            result.value = 'Error';
        }
    });

    // Adding conditions for specific operations
    document.getElementById('1').addEventListener('click', function() {
        if (currentOperation === '') {
            result.value += '1';
        }
    });

    document.getElementById('2').addEventListener('click', function() {
        if (currentOperation === '') {
            result.value += '2';
        }
    });

    document.getElementById('3').addEventListener('click', function() {
        if (currentOperation === 'subtract') {
            result.value += '3';
        }
    });

    subtract.addEventListener('click', function() {
        currentOperation = 'subtract';
        result.value += '-';
    });
});