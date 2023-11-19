const add = function(num1,num2) {
	return num1 + num2
};

const subtract = function(num1,num2) {
    return num1-num2
	
};

const multiply = function(num1,num2) {
    return num1*num2
	
};

const divide = function(num1,num2) {
    if(num2 === 0) return null
    return num1/num2
	
};

function operate(operator,a,b) {
    a= Number(a);
    b = Number(b);
    switch (operator){
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case '*':
            return multiply(a,b)
        case '/':
            return divide(a,b)
    }
}

const resultWindow = document.querySelector('#window')
resultWindow.textContent = ''

const btnNumbers = document.querySelectorAll('.numbers')
btnNumbers.forEach(btn => { btn.addEventListener( 'click', () => {
    const lastChar = resultWindow.textContent.slice(-1);
        if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/') {
            resultWindow.textContent += btn.textContent;
        } else {
            resultWindow.textContent += btn.textContent;
        }
    });
})

const btnOperators = document.querySelectorAll('.operator') 
btnOperators.forEach(btn => {
    btn.addEventListener('click', () => {
        const lastChar = resultWindow.textContent.slice(-1)
        if (lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/' ) {
            resultWindow.textContent = resultWindow.textContent.slice(0,-1) + btn.textContent;
        } else if (lastChar == '') {
        } else {
            resultWindow.textContent += String(btn.textContent)
        }
    })
})

const btnClear = document.querySelector('#clear')
const btnEqual = document.querySelector('#equals')

btnClear.addEventListener( 'click', () => {
    resultWindow.textContent = ''
})

btnEqual.addEventListener( 'click', () => {
    const expression = resultWindow.textContent;
    const matches = expression.match(/(\d+|\D)/g);
    if (!matches || matches.length < 3) {
        resultWindow.textContent = 'Error';
        return;
    }
    let total = operate(matches[1], matches[0], matches[2]);
    // If there are more than 3 elements in the array, perform subsequent operations
    for (let i = 3; i < matches.length; i += 2) {
        total = operate(matches[i], total, matches[i + 1]);
    }
    resultWindow.textContent = total;
});

