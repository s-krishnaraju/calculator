const add = function (num1, num2) {
    return num1 + num2
}

const substract = function (num1, num2) {
    return num1 - num2
}

const multiply = function (num1, num2) {
    return Math.round(num1 * num2 * 100000) / 100000
}

const divide = function (num1, num2) {
    if (num2 == 0) {

    }
    return Math.round(num1 / num2 * 100000) / 100000
}


const operate = function (operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2)
    }
    if (operator == "--") {
        return substract(num1, num2)
    }
    if (operator == "*") {
        return multiply(num1, num2)
    }
    if (operator == "/") {
        return divide(num1, num2)
    }
}
const zero = "Can't Divide By Zero"
const display = document.querySelector(".display")
currentDisplay = () => { return display.textContent.charAt(display.textContent.length - 1) }
let operatorSymbol; let result; 
const digits = document.querySelectorAll(".digits button")
digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if (display.textContent == zero) {
            display.textContent = ""
        }
        display.textContent += digit.textContent

    })

});

const clear = document.querySelector(".clear")
clear.addEventListener('click', () => {
    display.textContent = ""
})
const operators = document.querySelectorAll(".operators button")
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (display.textContent == zero || currentDisplay() == "" || currentDisplay() == "+" || currentDisplay() == "--" || currentDisplay() == "*" || currentDisplay() == "/") {
        } else if (display.textContent.includes("+") || display.textContent.includes("/") || display.textContent.includes("*") || display.textContent.includes("--")) {
            numArray = display.textContent.split(operatorSymbol)
            result = operate(operatorSymbol, Number(numArray[0]), Number(numArray[1]))
            operatorSymbol = operator.textContent
            if  (result == Infinity || result == -Infinity) {
                display.textContent = zero
            } else {
                display.textContent = result + operatorSymbol
            }
        } else {
            operatorSymbol = operator.textContent
            display.textContent += operatorSymbol
        }
    })

});

const equal = document.querySelector(".equal")
equal.addEventListener('click', () => {
    numArray = display.textContent.split(operatorSymbol)
    result = operate(operatorSymbol, Number(numArray[0]), Number(numArray[1]))
    if (!isNaN(result)) {
        if (result == Infinity || result == -Infinity) {
            display.textContent = zero
        } else {
            display.textContent = result
        }
    }
})

const backspace = document.querySelector(".backspace")

backspace.addEventListener('click',()=>{
    display.textContent = display.textContent.slice(0,-1)
})