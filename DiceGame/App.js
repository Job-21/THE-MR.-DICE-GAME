
document.getElementById("btn-roll").addEventListener("click",()=>{




    //RANDOM NUMBER ONE.
    document.getElementById("res1").innerHTML="";
let randomNum = Math.floor(Math.random()*6)+1;
let randomImageSrc = "images/dice-"+randomNum+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSrc);
let PlayerResult =  document.getElementById("res1").innerHTML;
document.getElementById("res1").style.color="yellow";
document.getElementById("res1").innerHTML = PlayerResult + " YOUR SCORE : " + randomNum;


//RANDOM NUMBER TWO.
document.getElementById("res2").innerHTML="";

let randomNum2 = Math.floor(Math.random()*6)+1;
let randImage2Src = "images/dice-"+randomNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randImage2Src);
let ComputerResult = document.getElementById("res2").innerHTML;
document.getElementById("res2").style.color = "red";
document.getElementById("res2").innerHTML = ComputerResult + "COMPUTER SCORE : "+randomNum2;



function checkResult(){
    if(randomNum > randomNum2){
        document.getElementById("result").innerHTML = "YOU WIN";
    }
    else if (randomNum < randomNum2){
        document.getElementById("result").innerHTML = "COMPUTER WINS";
    }
    else{
        document.getElementById("result").innerHTML = "DRAW";
    }
    
}
checkResult();

});

