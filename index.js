
document.querySelector("button").addEventListener("click",diceGame)

function diceGame () {

var randomNumber1= Math.floor(Math.random()*6)+1 ;
var randomNumber2= Math.floor(Math.random()*6)+1 ;

var newSrc1="images/dice" + randomNumber1 +".png" ;
var newSrc2="images/dice" + randomNumber2 +".png" ;

document.querySelector(".img1").setAttribute("src",newSrc1) ;
document.querySelector(".img2").setAttribute("src",newSrc2) ;

/* if player 1 wins */
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=" 🚩 Player 1 Wins! " ;
}
/* if there is draw */
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="There is a DRAW ! ";
}
/* if player 2 wins */
else{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩 " ;
}

}