// ini buat random naumber buat cari file di folder img//
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var img1 = document.querySelector(".img1");
img1.setAttribute("src", randomImageSource);

// ini buat random naumber buat cari file di folder img//
var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

var img2 = document.querySelector(".img2");
img2.setAttribute("src", randomImageSource2);

var h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
    h1.innerHTML = "PLAYER 1 WINS!🎈🎈🎈🎈🎈"
} else if (randomNumber1 === randomNumber2) {
    h1.innerHTML = "DRAW"
} else {
    h1.innerHTML = "PLAYER 2 WINS!🎈🎈🎈🎈🎈"
}