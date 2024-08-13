//Calculadora


function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression in the display
        display.textContent = eval(display.textContent) || '0';
    } catch {
        display.textContent = 'Error';
    }
}