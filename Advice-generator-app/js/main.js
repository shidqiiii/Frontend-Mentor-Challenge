var id = document.getElementById("id");
var text = document.getElementById("text");
var btn = document.getElementById("btn");

const url = "https://api.adviceslip.com/advice";

let getAdvice = function () {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.slip);

            id.innerHTML = data.slip.id;
            text.innerHTML = data.slip.advice;
        });
};

window.addEventListener("load", getAdvice);
btn.addEventListener("click", getAdvice);