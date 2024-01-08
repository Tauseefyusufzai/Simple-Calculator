function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = Number.isFinite(result) ? result : "Error";
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
