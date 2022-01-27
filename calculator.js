// screenResult is for displaying the result later on
const screenResult = document.querySelector('.screen')

// result is to kep track of the result as the name indicates
let result = 0

// input is to keep track of the number the user has chosen and the operator to keep track of which operator the user chose
let input = '0'
let operator

//Getting what button did the user click
document.querySelector('.buttons').addEventListener('click', function(event) {
    buttonClick(event.target.innerText)
})

// This function checks if the button clicked by the user is numerical or a symbol
function buttonClick(value) {
    if (isNaN(parseInt(value))) 
        getSymbol(value)
    else    
        getNumber(value)  

    display() 
}

// This function will do something depending on which symbol the user pressed
function getSymbol(symbol) {
    switch (symbol) {

        case 'C':
            result = 0
            input = '0'
            operator = null
            break;

        case '&#8592':
            let len = input.length
            if (len === 1)
                input = '0'
            input = input.substring(0, len - 1)
            break

        case '=':
            if (operator === null)
                return;
            doMath(parseInt(input))
            operator = null
            input = '' + result
            break

        default:
            getMath(symbol)
            break
    }
}

// This will do the operation depending on the previous operator
function doMath(num) {
    switch (operator) {

        case '+':
            result += num
            break

        case '-':
            result -= num
            break
        
        case 'x':
            result *= num
            break

        default:
            result /= num
            break
    }
}

function getMath(symbol) {
    if (input === '0') 
        return

    let number = parseInt(input)

    if (result === 0) 
        result = number

    else
        doMath(number)
    input = '0'
    operator = symbol
}

// This function will add the number to the input variable and display it to the user on the screen
function getNumber(num) {
    if (input === '0')
        input = num
    else
        input += num
}

// This function display the result on the screen
function display() {
    screenResult.innerText = input
}