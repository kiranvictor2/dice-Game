var number1 = Math.floor((Math.random() * 6) + 1);
var number2 = Math.floor((Math.random() * 6) + 1);

function randomNumber1() {

    if (number1 == 1) {
        document.querySelectorAll("img")[0].setAttribute("src", "./images/dice1.png");
    }
    if (number1 == 2) {
        document.querySelectorAll("img")[0].setAttribute("src", "./images/dice2.png");
    }
    if (number1 == 3) {
        document.querySelectorAll("img")[0].setAttribute("src", "./images/dice3.png");
    }
    if (number1 == 4) {
        document.querySelectorAll("img")[0].setAttribute("src", "./images/dice4.png");
    }
    if (number1 == 5) {
        document.querySelectorAll("img")[0].setAttribute("src", "./images/dice5.png");
    }
    if (number1 == 6) {
        document.querySelectorAll("img")[0].setAttribute("src", "./images/dice6.png");
    }

}
randomNumber1();


function randomNumber2() {

    if (number2 == 1) {
        document.querySelectorAll("img")[1].setAttribute("src", "./images/dice1.png");
    }
    if (number2 == 2) {
        document.querySelectorAll("img")[1].setAttribute("src", "./images/dice2.png");
    }
    if (number2 == 3) {
        document.querySelectorAll("img")[1].setAttribute("src", "./images/dice3.png");
    }
    if (number2 == 4) {
        document.querySelectorAll("img")[1].setAttribute("src", "./images/dice4.png");
    }
    if (number2 == 5) {
        document.querySelectorAll("img")[1].setAttribute("src", "./images/dice5.png");
    }
    if (number2 == 6) {
        document.querySelectorAll("img")[1].setAttribute("src", "./images/dice6.png");
    }
}
randomNumber2();

if (number2 == number1) {
    document.querySelector("h1").innerHTML = "draw";
}
if (number1 > number2) {
    document.querySelector("h1").innerHTML = "player 1 wins!";

}
if (number1 < number2) {
    document.querySelector("h1").innerHTML = "player 2 wins!";

}