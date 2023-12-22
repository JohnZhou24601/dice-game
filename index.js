var randomNumber1 = Math.floor(1 + (6 * Math.random()));
var randomNumber2 = Math.floor(1 + (6 * Math.random()));

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");

document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 John wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Mallori wins! 🚩 ";
} else {
    document.querySelector("h1").textContent = "Draw!";
}
