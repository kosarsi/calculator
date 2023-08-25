display = document.querySelector('#display');
display.textContent = "0";

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
    });
}

left = document.querySelector('#left');
right = document.querySelector('#right');
left.addEventListener('click', function() {
    display.textContent = display.textContent + '(';
});
right.addEventListener('click', function() {
    display.textContent = display.textContent + ')';
});

decimal = document.querySelector('#decimal');
decimal.addEventListener('click', function() {
    display.textContent = display.textContent + '.';
});

add = document.querySelector('#add');
subtract = document.querySelector('#subtract');
multiply = document.querySelector('#multiply');
divide = document.querySelector('#divide');
operators = document.querySelectorAll('.operation');
operatorOrder = ['/', '*', '-', '+'];
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function() {
        display.textContent = display.textContent + operatorOrder[i]; 
    });
}

clr = document.querySelector('#clr');
del = document.querySelector('#del');
clr.addEventListener('click', function() {
    display.textContent = '';
});
del.addEventListener('click', function() {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});


equal = document.querySelector('#evaluate');
equal.addEventListener('click', function() {
    
});