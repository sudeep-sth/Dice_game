

function dice(){
    let random1 = Math.random();
    random1 = Math.floor((random1*6)+1);
    
    let random2 = Math.random();
    random2 = Math.floor((random2*6)+1)

   var player1 = document.querySelector(".img1").setAttribute("src","./images/dice"+ random1 +".png")
   var player2= document.querySelector(".img2").setAttribute("src","./images/dice"+ random2 +".png")

if (random1 === random2){
document.querySelector("h1").innerHTML=("DRAW");
}
else if(random1 > random2){
    document.querySelector("h1").innerHTML=("Player 1 wins");
}
else{
document.querySelector("h1").innerHTML=("Player 2 wins");
}}

dice();