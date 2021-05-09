const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const firstQuestion = 'Enter the first number:\n';
const secondQuestion = 'Enter the second number:\n';
const thirdQuestion = 'Enter the operation wanted:\n';

const performCalculation = (num1, num2, operation) => {
    const firstNumber = parseInt(num1);
    const secondNumber = parseInt(num2);
    switch (operation) {
        case '+': 
            return firstNumber + secondNumber;
        case '-': 
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        //case '%':
            //return firstNumber % secondNumber;
        default:
            return 0;
    }
}

reader.question(firstQuestion, (firstNumber) => {
    //console.log({ firstNumber });
    reader.question(secondQuestion, (secondNumber) => {
        //console.log({ secondNumber });
        reader.question(thirdQuestion, (operator) => {
            const result = performCalculation(
                firstNumber, 
                secondNumber, 
                operator
            );

            console.log({ result });
            reader.close();
        })
    });
});
