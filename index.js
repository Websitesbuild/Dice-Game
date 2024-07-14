function randomGenerator(){
    var random = Math.floor(Math.random() * 6) + 1;
    return random;
}

var img1 = "./images/dice"+randomGenerator()+".png";
var img2 = "./images/dice"+randomGenerator()+".png";
    
    document.querySelector(".img1").setAttribute("src",img1);
    document.querySelector(".img2").setAttribute("src",img2);


    if(img1 > img2){
    document.querySelector("h1").textContent = "Player 1 Wins!🚩" ;
    }
    else if(img1 === img2){
    document.querySelector("h1").textContent = "Draw!";
    }
    else{
    document.querySelector("h1").textContent = "Player 2 Wins!🚩" ;
    }






