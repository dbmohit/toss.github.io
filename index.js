function num(){
var random = Math.random();
random = random*6;
random = Math.floor(random);
random = random+1;
return random;
}
var num1 = num();
var num2 = num();
    var im1 = document.getElementsByTagName("img");
    im1[0].addEventListener("click",function(){
        if(num1 == 1){
            im1[0].setAttribute("src","images/dice1.png");
        }
        else if(num1 == 2){
            im1[0].setAttribute("src","images/dice2.png");
        }
        else if(num1 == 3){
            im1[0].setAttribute("src","images/dice3.png");
        }
        else if(num1 == 4){
            im1[0].setAttribute("src","images/dice4.png");
        }
        else if(num1 == 5){
            im1[0].setAttribute("src","images/dice5.png");
        }
        else if(num1 == 6){
            im1[0].setAttribute("src","images/dice6.png");
        }
    });
    im1[1].addEventListener("click",function(){
        if(num1>num2){
            document.getElementById("j").innerHTML = "π¦  π  πππΆπππ 1 ππΎππ  π  π¦";
        }
        else if(num1<num2){
            document.getElementById("j").innerHTML = "π¦  π  πππΆπππ 2 ππΎππ  π  π¦";
        }
        else{
            document.getElementById("j").innerHTML = "(γ£ββ‘β)γ£ β₯ draw β₯";
        }
        if(num2 == 1){
            im1[1].setAttribute("src","images/dice1.png");
        }
        else if(num2 == 2){
            im1[1].setAttribute("src","images/dice2.png");
        }
        else if(num2 == 3){
            im1[1].setAttribute("src","images/dice3.png");
        }
        else if(num2 == 4){
            im1[1].setAttribute("src","images/dice4.png");
        }
        else if(num2 == 5){
            im1[1].setAttribute("src","images/dice5.png");
        }
        else if(num2 == 6){
            im1[1].setAttribute("src","images/dice6.png");
        }
        
        
    });
