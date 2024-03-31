var rating = document.querySelectorAll(".rating");
console.log(rating)
var number = "";


rating.forEach(element => {
    element.addEventListener('click', function () {
        rating.forEach(num => {
            num.classList.remove("selected");

            this.classList.add("selected");
            number = this.id;
        })
        console.log(number);
    })
});

function submit() {
    document.getElementById("main").style.display = "none";
    document.getElementById("thankyou").style.display = "block";
}

var button = document.getElementById("submit")
button.addEventListener('click', function () {
    if (number) {
        submit();
        document.getElementById("rate").innerHTML = `You selected ${number} out of 5`
    }
    else {
        alert("You Should Choice first")
    }
});