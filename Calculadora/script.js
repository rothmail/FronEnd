let input = document.querySelector('#inputText');
let textValue = '';

function addNumber(number) {
    textValue += number;
    upText();
}

function addOperator(operator) {
    if (textValue === '' || isOperator(textValue.slice(-1))) return;
    textValue += operator;
    upText();
}

function addDecimal() {
    const lastChar = textValue.slice(-1);
    if (lastChar === '.' || isOperator(lastChar)) return;

    const lastNumber = textValue.split(/[\+\-\*\/\%]/).pop();

    if (!lastNumber.includes('.')) {
        textValue += '.';
        upText();
    }
}

function delText() {
    textValue = textValue.slice(0, -1);
    upText();
}

function clearText() {
    textValue = '';
    upText();
}

function calculate() {
    try {
        let conta = textValue.replace(/(\d+)%(\d+)/g, '($1/100)*$2');
        let resultado = eval(conta);
        if (!Number.isInteger(resultado)) {
            resultado = resultado.toFixed(2);
        }

        textValue = resultado.toString();
        upText();
    } catch {
        textValue = 'ERROR';
        upText();
        setTimeout(() => {
            clearText();
        }, 1000);
    }
}

function upText() {
    input.value = textValue;
}

function isOperator(char) {
    return ['+', '-', '*', '/', '%'].includes(char);
}