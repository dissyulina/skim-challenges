// Declare variables from Challenge #1
let inputOne = document.getElementById("input1");
let outputOne = document.getElementById("output1");
let calculateButtonOne = document.getElementById("calculate-button1");

// Challenge #1 Functionality
function multiplyByDecrement(input) {
    let result = 1
    for (let i=input ; i>0; i--) {
        result *= i
    }
    return result
}

calculateButtonOne.addEventListener('click', function() {
    let inputValue = Number(inputOne.value);
    outputOne.innerHTML = multiplyByDecrement(inputValue);
})