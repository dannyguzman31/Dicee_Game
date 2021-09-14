

function diceeGame(){


var randomNumber1 = Math.floor(Math.random()* 6) + 1; // create a random number from 1-6

var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; // random img from source

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);// select and change img


// IMAGE 2

var randomNumber2 = Math.floor(Math.random()* 6) + 1; // random number from 1-6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // random img from source

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // select and change img


// Change display

if ( randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if ( randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

}
