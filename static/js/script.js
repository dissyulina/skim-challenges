// Declare variables from Challenge #1
let inputOne = document.getElementById("input1");
let outputOne = document.getElementById("output1");
let calculateButtonOne = document.getElementById("calculate-button1");
let resetButtonOne = document.getElementById("reset-button1");

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
    // Validate input, an integer between 1-18
    if ((inputValue >= 1) && (inputValue <= 18) && (Number.isInteger(inputValue))) {
        outputOne.innerHTML = multiplyByDecrement(inputValue);
    } else {
        outputOne.innerHTML = "Please input an integer between 1 and 18"
    }
})

resetButtonOne.addEventListener('click', function() {
    document.getElementById("input1").value = ''
    outputOne.innerHTML = '';
});
