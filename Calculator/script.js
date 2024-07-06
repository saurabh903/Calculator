// Get the display input element
const display = document.querySelector('input[name="display"]');

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

// Function to append a value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to evaluate the expression
function evaluateExpression() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid expression');
    }
}

// Event listeners for the calculator buttons
document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        switch (value) {
            case 'AC':
                clearDisplay();
                break;
            case 'DEL':
                deleteLastCharacter();
                break;
            case '=':
                evaluateExpression();
                break;
            default:
                appendToDisplay(value);
                break;
        }
    });
});
