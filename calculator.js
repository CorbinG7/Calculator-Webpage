//Calculator

const display = document.getElementById("display");

//Append to display
function appendToDisplay(input) {
    display.value += input;
}

//Clear display
function clearDisplay() {
    display.value = "";
}

//Calculate
function calculate() {
    try {
        display.value = eval(display.value)
        if (isNaN(display.value)) {
            display.value = "Error";
        }
    }
    catch(error) {
        display.value = "Error";
    }

}