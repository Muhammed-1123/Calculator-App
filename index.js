const Result = document.querySelector(".result");
const Buttons = document.querySelectorAll("button");
const Equal = document.querySelector(".equal");
const Clear = document.querySelector(".Clear");
const Delete = document.querySelector(".Delete");

Buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.classList.contains("equal")) {
            Result.textContent = eval(Result.textContent);
        } else if (e.target.classList.contains("Clear")) {
            Result.textContent = "";
        } else if (e.target.classList.contains("Delete")) {
            Result.textContent = Result.textContent.slice(0, -1);
        } else {
            Result.textContent += e.target.textContent;
        }   
    });
});


