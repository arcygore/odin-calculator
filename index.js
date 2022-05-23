let currentValue = [];
let num1 = 0;
let num2 = 0;
let total = 0;
let operation;
let prevNum = 0;

const numButtons = document.querySelectorAll('div.number');
const operandButtons = document.querySelectorAll('.operand');
const decimal = document.querySelector('.point');
const equals = document.querySelector('.equals');
const previousEntry = document.querySelector('.previous-entry');
const allClear = document.querySelector('.all-clear');
const del = document.querySelector('.delete');
let currentEntry = document.querySelector('.current-entry');

del.addEventListener('click', (e) => {
    currentValue = [...currentEntry.textContent];
    currentValue.pop();
    currentEntry.textContent = currentValue.join('');
})

allClear.addEventListener('click', (e) => {
    previousEntry.textContent = '';
    currentEntry.textContent = '';
    currentValue = [];
    num1 = 0;
    num2 = 0;
    total = 0;
    operation = undefined;
})


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
            if (currentEntry.textContent !== '8008135' && currentEntry.textContent != '' && currentEntry.textContent != '0') {
                let op = e.explicitOriginalTarget.innerText;
                prevNum = currentValue.join('');
                previousEntry.textContent = `${prevNum} ${op}`;
                operation = operand.classList[1];
                currentEntry.textContent = '';
                currentValue = [];
            }
        } else {
            if (currentEntry.textContent !== '8008135' && currentEntry.textContent != '' && currentEntry.textContent != '0') {
                num2 = parseFloat(currentEntry.textContent);
                num1 = parseFloat(previousEntry.textContent.slice(0,-1));
                op = e.explicitOriginalTarget.innerText;
                if (operation == 'plus') {
                    previousEntry.textContent = `${add(num1,num2)} ${op}`;
                }
                else if (operation == 'minus') {
                    previousEntry.textContent = `${subtract(num1,num2)} ${op}`;;               
                }
                else if (operation == 'multiply') {
                    previousEntry.textContent = `${multiply(num1,num2)} ${op}`;
                }
                else if (operation == 'division') {
                    previousEntry.textContent = `${divide(num1,num2)} ${op}`;
                }
                operation = operand.classList[1];
                currentEntry.textContent = '';
                currentValue = [];
            }
        }


    })
});

equals.addEventListener('click', (e) => {
        if (operation) {
            num2 = parseFloat(currentEntry.textContent);
            num1 = parseFloat(previousEntry.textContent.slice(0,-1));
            if (operation == 'plus') {
                currentEntry.textContent = add(num1,num2);
            }
            else if (operation == 'minus') {
                currentEntry.textContent = subtract(num1,num2);
            }
            else if (operation == 'multiply') {
                currentEntry.textContent = multiply(num1,num2);
            }
            else if (operation == 'division') {
                currentEntry.textContent = divide(num1,num2);
            }
        } else {
            return;
        }
    currentValue = [currentEntry.textContent];
    previousEntry.textContent = '';
    operation = undefined;
})

// Keyboard entry -- this feature was abandoned for now because I think I wrote this entire project wrong. I needed to have a bunch of separate functions for everything, but performed everything on the 
// addEventListener functions when clicked. This was not smart as now I cannot reuse functions with a "touch" or "type" event without potentially invoking them twice.


// del.addEventListener('click', (e) => {
//     currentValue = [...currentEntry.textContent];
//     currentValue.pop();
//     currentEntry.textContent = currentValue.join('');
// })

// allClear.addEventListener('click', (e) => {
//     previousEntry.textContent = '';
//     currentEntry.textContent = '';
//     currentValue = [];
//     num1 = 0;
//     num2 = 0;
//     total = 0;
//     operation = undefined;
// })


// numButtons.forEach(function(num) {
//     num.addEventListener('click', (e) => {
//         currentValue.push(e.explicitOriginalTarget.innerText);
//         if (currentEntry.textContent.length < 16) {
//             currentEntry.textContent = currentValue.join('');
//         }
//     })
// })

// decimal.addEventListener('click', (e) => {
//     console.log(e.explicitOriginalTarget.innerText)
//     if (!currentValue.includes(".")) {
//         currentValue.push(e.explicitOriginalTarget.innerText);
//         currentEntry.textContent = currentValue.join('');
//     } else {
//         return;
//     }
// })

// operandButtons.forEach(function(operand) {
//     operand.addEventListener('click', (e) => {
//         if (!operation) {
//             if (currentEntry.textContent != '8008135' || currentEntry.textContent != '' || currentEntry.textContent != '0') {
//                 let op = e.explicitOriginalTarget.innerText;
//                 prevNum = currentValue.join('');
//                 previousEntry.textContent = `${prevNum} ${op}`;
//                 currentEntry.textContent = 0;
//                 currentValue = [];
//                 operation = operand.classList[1];
//             }
//         } else {
//             num2 = parseFloat(currentEntry.textContent);
//             num1 = parseFloat(previousEntry.textContent.slice(0,-1));
//             op = e.explicitOriginalTarget.innerText;
//             if (operation == 'plus') {
//                 previousEntry.textContent = `${add(num1,num2)} ${op}`;
//             }
//             else if (operation == 'minus') {
//                 previousEntry.textContent = `${subtract(num1,num2)} ${op}`;;               
//             }
//             else if (operation == 'multiply') {
//                 previousEntry.textContent = `${multiply(num1,num2)} ${op}`;
//             }
//             else if (operation == 'division') {
//                 previousEntry.textContent = `${divide(num1,num2)} ${op}`;
//             }
//         }
//         currentEntry.textContent = '';
//         currentValue = [];
//         operation = operand.classList[1];
//     })
// });

// equals.addEventListener('click', (e) => {
//         if (operation) {
//             num2 = parseFloat(currentEntry.textContent);
//             num1 = parseFloat(previousEntry.textContent.slice(0,-1));
//             if (operation == 'plus') {
//                 currentEntry.textContent = add(num1,num2);
//             }
//             else if (operation == 'minus') {
//                 currentEntry.textContent = subtract(num1,num2);
//             }
//             else if (operation == 'multiply') {
//                 currentEntry.textContent = multiply(num1,num2);
//             }
//             else if (operation == 'division') {
//                 currentEntry.textContent = divide(num1,num2);
//             }
//         } else {
//             return;
//         }
//     currentValue = [currentEntry.textContent];
//     previousEntry.textContent = '';
//     operation = undefined;
// })

// Phone entry


// del.addEventListener('touchstart', (e) => {
//     currentValue = [...currentEntry.textContent];
//     currentValue.pop();
//     currentEntry.textContent = currentValue.join('');
// })

// allClear.addEventListener('touchstart', (e) => {
//     previousEntry.textContent = '';
//     currentEntry.textContent = '';
//     currentValue = [];
//     num1 = 0;
//     num2 = 0;
//     total = 0;
//     operation = undefined;
// })


// numButtons.forEach(function(num) {
//     num.addEventListener('touchstart', (e) => {
//         currentValue.push(e.explicitOriginalTarget.innerText);
//         if (currentEntry.textContent.length < 16) {
//             currentEntry.textContent = currentValue.join('');
//         }
//     })
// })

// decimal.addEventListener('touchstart', (e) => {
//     console.log(e.explicitOriginalTarget.innerText)
//     if (!currentValue.includes(".")) {
//         currentValue.push(e.explicitOriginalTarget.innerText);
//         currentEntry.textContent = currentValue.join('');
//     } else {
//         return;
//     }
// })

// operandButtons.forEach(function(operand) {
//     operand.addEventListener('touchstart', (e) => {
//         if (!operation) {
//             if (currentEntry.textContent != '8008135' && currentEntry.textContent != '' && currentEntry.textContent != '0') {
//                 let op = e.explicitOriginalTarget.innerText;
//                 prevNum = currentValue.join('');
//                 previousEntry.textContent = `${prevNum} ${op}`;
//                 operation = operand.classList[1];
//             }
//         } else {
//             num2 = parseFloat(currentEntry.textContent);
//             num1 = parseFloat(previousEntry.textContent.slice(0,-1));
//             op = e.explicitOriginalTarget.innerText;
//             if (operation == 'plus') previousEntry.textContent = `${add(num1,num2)} ${op}`;
//             else if (operation == 'minus') previousEntry.textContent = `${subtract(num1,num2)} ${op}`;
//             else if (operation == 'multiply') previousEntry.textContent = `${multiply(num1,num2)} ${op}`;
//             else if (operation == 'division') previousEntry.textContent = `${divide(num1,num2)} ${op}`;
//         }
//         currentEntry.textContent = '';
//         currentValue = [];
//         operation = operand.classList[1];
//     })
// });

// equals.addEventListener('touchstart', (e) => {
//         if (operation) {
//             num2 = parseFloat(currentEntry.textContent);
//             num1 = parseFloat(previousEntry.textContent.slice(0,-1));
//             if (operation == 'plus') {
//                 currentEntry.textContent = add(num1,num2);
//             }
//             else if (operation == 'minus') {
//                 currentEntry.textContent = subtract(num1,num2);
//             }
//             else if (operation == 'multiply') {
//                 currentEntry.textContent = multiply(num1,num2);
//             }
//             else if (operation == 'division') {
//                 currentEntry.textContent = divide(num1,num2);
//             }
//         } else {
//             return;
//         }
//     currentValue = [currentEntry.textContent];
//     previousEntry.textContent = '';
//     operation = undefined;
// })


function add(x,y) {
    if ((x+y)%1 > 0) return (x+y).toFixed(8);
    else return x+y;
}

function subtract(x,y) {
    if ((x-y)%1 > 0) return (x-y).toFixed(8);
    else return x-y;
}


function multiply(x,y) {
    if ((x*y)%1 > 0) return (x*y).toFixed(8);
    else return x*y;
}

function divide(x,y) {
    if (y) {
        if ((x/y)%1 > 0) return (x/y).toFixed(8);
        else return x/y;}
    else return "2 INFINITY N BEYOND";
}