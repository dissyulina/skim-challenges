// Declare variables for Challenge #1
const inputOne = document.getElementById("input1");
const outputOne = document.getElementById("output1");
const calculateButtonOne = document.getElementById("calculate-button1");
const inputValidationOne = document.getElementById("input-validation1");

// Declare variables for Challenge #2
const inputTwo = document.getElementById("input2");
const outputTwo = document.getElementById("output2");
const calculateButtonTwo = document.getElementById("calculate-button2");
const inputValidationTwo = document.getElementById("input-validation2");

const resetButton = document.getElementsByClassName("reset-button");

// Challenge #1 Functionality
function multiplyByDecrement(input) {
    let result = 1;
    for (let i=input ; i>0; i--) {
        result *= i;
    }
    return result;
}

calculateButtonOne.addEventListener('click', function() {
    const inputValue = Number(inputOne.value);
    // Validate input, an integer between 1-18
    if ((inputValue >= 1) && (inputValue <= 18) && (Number.isInteger(inputValue))) {
        outputOne.innerHTML = multiplyByDecrement(inputValue);
    } else {
        inputValidationOne.innerHTML = "Please input an integer between 1 and 18";
    }
});

// Challenge #2 Functionality
function skimLoop(input) {
    let output = [];
    for (let i=1 ; i<=input; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            output.push("SKIM is a great place to work!!");
        } else if (i % 3 == 0) {
            output.push("SKIM");
        } else if (i % 5 == 0) {
            output.push("is a great place to work!!");
        } else {
            output.push(i);
        }
    }
    return output.join(', ');
}

calculateButtonTwo.addEventListener('click', function() {
    let inputValueTwo = Number(inputTwo.value);
    // Validate input, has to be an integer
    if (Number.isInteger(inputValueTwo)) {
        outputTwo.innerHTML = skimLoop(inputTwo.value);
    } else {
        inputValidationTwo.innerHTML = "Please input an integer";
    }
});

// Reset button for both challenges
for(let i = 0; i < resetButton.length; i++) {
    resetButton[i].addEventListener('click', function() {
        this.parentNode.parentNode.children[2].value = '';
        this.parentNode.parentNode.children[3].innerHTML = '';
        this.parentNode.parentNode.children[6].innerHTML = '';
    });
}
