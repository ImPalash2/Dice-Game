var pl1 = prompt("Enter player1 name?");
document.querySelector(".p1").innerHTML = (pl1);
var pl2 = prompt("Enter player 2 name?");
document.querySelector(".p2").innerHTML = (pl2);
function attack() {
    var value = Math.floor(Math.random() * 6) + 1;
    // for player1
    var diceImg = "dice" + value + ".png";
    var imgSrc = "images/"+ diceImg;
    document.querySelector(".img1").setAttribute("src", imgSrc);
    /*if (value === 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    }
    else if (value === 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    }
    else if (value === 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    }
    else if (value === 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    }
    else if (value === 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    }
    else if (value === 6) {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }*/
    // for player2
    var value2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img2").setAttribute("src", "images/dice" + value2 + ".png");
    /*if (value2 === 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    }
    else if (value2 === 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    }
    else if (value2 === 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    }
    else if (value2 === 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    }
    else if (value2 === 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    }
    else if (value2 === 6) {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }
    */
    // winner
    if (value > value2){
        document.querySelector("h1").innerHTML = (pl1 + " is winner");
    }
    else if (value < value2) {
        document.querySelector("h1").innerHTML = (pl2 + " is winner");
    }
    else {
        document.querySelector("h1").innerHTML = ("It's a draw");
    }
};
