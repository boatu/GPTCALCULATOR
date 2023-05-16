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
