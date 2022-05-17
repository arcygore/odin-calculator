let currentValue = [];
let num1 = 0;
let num2 = 0;
let total = 0;
let operation;

const numButtons = document.querySelectorAll('div.number');
const operandButtons = document.querySelectorAll('.operand');
const decimal = document.querySelector('.point');
const equals = document.querySelector('.equals');
let currentEntry = document.querySelector('.current-entry');
const previousEntry = document.querySelector('.previous-entry');

console.log(numButtons)

numButtons.forEach(function(num) {
    num.addEventListener('click', (e) => {
        currentValue.push(e.explicitOriginalTarget.innerText);
        if (currentEntry.textContent.length < 16) {
            currentEntry.textContent = currentValue.join('');
        }
    })
})

decimal.addEventListener('click', (e) => {
    console.log(e.explicitOriginalTarget.innerText)
    if (!currentValue.includes(".")) {
        currentValue.push(e.explicitOriginalTarget.innerText);
        currentEntry.textContent = currentValue.join('');
    } else {
        return;
    }
})

operandButtons.forEach(function(operand) {
    operand.addEventListener('click', (e) => {
        if (!operation) {
            if (currentEntry.textContent != '8008135') {
                let op = e.explicitOriginalTarget.innerText;
                let prevNum = currentValue.join('');
                previousEntry.textContent = `${prevNum} ${op}`;
                currentEntry.textContent = 0;
                currentValue = [];
                operation = operand.classList[1];
                console.log(operation)
            }
        }
    })
});

equals.addEventListener('click', (e) => {
    if (operation) {
        num2 = parseFloat(currentValue);
        currentEntry.textContent = currentValue.join('');
    } else {
        return;
    }
})

console.log(operation)


function add(x,y) {
    return x+y;
}
