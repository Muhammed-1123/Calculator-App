const Result = document.querySelector(".result");
const Buttons = document.querySelectorAll("button");
const Equal = document.querySelector(".equal");
const Clear = document.querySelector(".Clear");
const Delete = document.querySelector(".Delete");

function calculate() {
    try {
        Result.textContent = eval(Result.textContent) || "0"; //
    } catch (error) {
        Result.textContent = "Error";
    }
}


Buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = e.target.textContent;
        
        if (e.target.classList.contains("equal")) {
            calculate();
        } else if (e.target.classList.contains("Clear")) {
            Result.textContent = "";
        } else if (e.target.classList.contains("Delete")) {
            Result.textContent = Result.textContent.slice(0, -1);
        } else {
            Result.textContent += value;
        }
    });
});

document.addEventListener("keyup", (e) => {
    if ((e.key >= '0' && e.key <= '9') || "+-*/.".includes(e.key)) {
        Result.textContent += e.key;
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        Result.textContent = Result.textContent.slice(0, -1);
    } else if (e.key === "Escape") {

        Result.textContent = "";
    }
});
