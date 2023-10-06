let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1-6.png
let randomImageSrc = "images/" + randomDiceImage; 

let dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", randomImageSrc);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player One Wins!";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player Two Wins!";
}else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="It's a Draw!"
}
