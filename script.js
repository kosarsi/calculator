display = document.querySelector('#display');
display.textContent = "0";

let displayText = ['0'];

zero = document.querySelector('#zero');
one = document.querySelector('#one'); 
two = document.querySelector('#two');
three = document.querySelector('#three');
four = document.querySelector("#four");
five = document.querySelector('#five');
six = document.querySelector('#six');
seven = document.querySelector('#seven');
eight = document.querySelector('#eight');
nine = document.querySelector('#nine'); 
numbers = document.querySelectorAll('.number');
numberOrder = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        display.textContent = display.textContent + numberOrder[i];
        if (isNaN(displayText[displayText.length - 1])) {
            displayText.push(numberOrder[i] + "");
        } else {
            displayText[displayText.length - 1] = displayText[displayText.length - 1] + numberOrder[i]; 
        }
    });
}

decimal = document.querySelector('#decimal');
decimal.addEventListener('click', function() {
    if (!isNaN(displayText[displayText.length - 1]) && !(displayText[displayText.length - 1].includes("."))) {
        display.textContent = display.textContent + '.';
        displayText[displayText.length - 1] = displayText[displayText.length - 1] + ".";
    }
});

add = document.querySelector('#add');
subtract = document.querySelector('#subtract');
multiply = document.querySelector('#multiply');
divide = document.querySelector('#divide');
operators = document.querySelectorAll('.operation');
operatorOrder = ['÷', '×', '-', '+'];
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function() {
        if (!operatorOrder.includes(displayText[displayText.length - 1]) && displayText.length != 0) {
            display.textContent = display.textContent + operatorOrder[i]; 
            displayText.push(operatorOrder[i]);
        }
    });
}

clr = document.querySelector('#clr');
del = document.querySelector('#del');
clr.addEventListener('click', function() {
    display.textContent = '';
    displayText = [];
});
del.addEventListener('click', function() {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    if (displayText[displayText.length - 1].length == 1) {
        displayText.pop();
    } else {
        displayText[displayText.length - 1] = displayText[displayText.length - 1].slice(0, displayText[displayText.length - 1].length - 1);
    }
});

equal = document.querySelector('#evaluate');
equal.addEventListener('click', function() {
    let t = displayText[displayText.length - 1]; 
    if (displayText.length != 0 && !isNaN(t) && !isNaN(t[t.length - 1])) {
        for (let i = 1; i < displayText.length - 1; i += 2) {
            if (displayText[i] == '×' || displayText[i] == '÷') {
                let x;
                if (displayText[i] == '×') {
                    x = displayText[i - 1] * displayText[i + 1];
                } else {
                    x = displayText[i - 1] / displayText[i + 1];
                }
                displayText.splice(i - 1, 3);
                displayText.splice(i - 1, 0, x);
                i -= 2;
            }
        }
        for (let i = 1; i < displayText.length - 1; i += 2) {
            if (displayText[i] == '+' || displayText[i] == '-') {
                let x;
                if (displayText[i] == '+') {
                    x = displayText[i - 1] * 1 + displayText[i + 1] * 1;
                } else {
                    x = displayText[i - 1] - displayText[i + 1];
                }
                displayText.splice(i - 1, 3);
                displayText.splice(i - 1, 0, x);
                i -= 2;
            }
        }
        displayText[0] = displayText[0] + "";
        display.textContent = displayText[0];
        let pastDecimal = 0; 
        if (displayText[0].includes(".")) {
            let i = displayText[0].indexOf(".");
            pastDecimal = displayText[0].length - i - 1; 
        }
        console.log(pastDecimal);
        if (pastDecimal > 5) {
            let x = displayText[0] * 1;
            x = x * 100000;
            x = Math.round(x);
            x = x / 100000;
            displayText[0] = x + "";
            display.textContent = displayText[0];  
        }

    }

    
});