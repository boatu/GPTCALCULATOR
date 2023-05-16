function handleKeyPress(event) {
    var key = event.key;
    var display = document.getElementById('display');

    if (event.keyCode === 13) {
        // Handle Enter key
        calculateResult();
    } else if (event.keyCode === 8) {
        // Handle Backspace key
        deleteCharacter();
    } else if (event.keyCode === 27) {
        // Handle Escape key
        clearDisplay();
    } else {
        // Handle other key presses
        appendCharacter(key);
    }
}

// Rest of the code remains the same
function appendCharacter(char) {
    document.getElementById('display').value += char;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteCharacter() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    var display = document.getElementById('display');
    var expression = display.value;

    try {
        var result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
