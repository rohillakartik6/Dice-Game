var randomNumber1 = Math.floor(6*(Math.random())) + 1 ;
var randomNumber2 = Math.floor(6*(Math.random())) + 1 ;

var randomImageSource = "images/dice" + randomNumber1 + ".png";
document.querySelector("img").setAttribute("src", randomImageSource);

var randomImageSource = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

// if(randomNumber1 == 1){
//     document.querySelector("img").setAttribute("src", "images/dice1.png");
// }

// if(randomNumber1 == 2){
//     document.querySelector("img").setAttribute("src", "images/dice2.png");
// }

// if(randomNumber1 == 3){
//     document.querySelector("img").setAttribute("src", "images/dice3.png");
// }

// if(randomNumber1 == 4){
//     document.querySelector("img").setAttribute("src", "images/dice4.png");
// }

// if(randomNumber1 == 5){
//     document.querySelector("img").setAttribute("src", "images/dice5.png");
// }

// if(randomNumber1 == 6){
//     document.querySelector("img").setAttribute("src", "images/dice6.png");
// }

// if(randomNumber2 == 1){
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
// }

// if(randomNumber2 == 2){
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
// }

// if(randomNumber2 == 3){
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
// }

// if(randomNumber2 == 4){
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
// }

// if(randomNumber2 == 5){
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
// }

// if(randomNumber2 == 6){
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
// }


// var player1Name = prompt("Enter Player 1 Name");
// var player2Name = prompt("Enter Player 2 Name");

// document.querySelector("p").innerHTML = player1Name[0].toUpperCase() + player1Name.slice(1,player1Name.length;
// document.querySelectorAll("p")[1].innerHTML = player2Name.toUpperCase();

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Its a Draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🥇Player1 Won !";
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "🥇Player2 Won !";
}

// var player1Name = document.getElementById("player1").textContent;
// var player2Name = document.getElementById("player1").textContent;

// document.querySelector("p").getAttribute