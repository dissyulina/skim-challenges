// Declare variables from Challenge #1
let inputOne = document.getElementById("input1");
let outputOne = document.getElementById("output1");
let calculateButtonOne = document.getElementById("calculate-button1");
let resetButtonOne = document.getElementById("reset-button1");

// Declare variables from Challenge #2
let inputTwo = document.getElementById("input2");
let outputTwo = document.getElementById("output2");
let calculateButtonTwo = document.getElementById("calculate-button2");

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

// Challenge #2 Functionality
function skimLoop(input) {
    let output = [];
    for (let i=1 ; i<=input; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            output.push("SKIM is a great place to work!!") 
        } else if (i % 3 == 0) {
            output.push("SKIM")
        } else if (i % 5 == 0) {
            output.push("is a great place to work!!")
        } else {
            output.push(i)
        }
    }
    return output.join(', ');
}

calculateButtonTwo.addEventListener('click', function() {
    outputTwo.innerHTML = skimLoop(inputTwo.value);
});