// tradicional function definition
function randomNumber() {
    console.log(Math.random());
}

function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}

// arrow funtion definition
const helloWorld = () => {
    console.log("Hello, world!");
}

// Calling the function
randomNumber();
randomNumber();

helloWorld();

const firstSum = sumTwoNumbers(1, 7);
const secondSum = sumTwoNumbers(19, 23);

console.log({
    firstSum,
    secondSum
})