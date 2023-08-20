var randomNumber1=Math.random();
a=Math.floor(randomNumber1*6)+1;

var rollDiceImg="images/"+"dice"+a+".png";
var image=document.querySelectorAll("img")[0];
image.setAttribute("src",rollDiceImg);

// for 2nd random number

var randomNumber2=Math.random();
b=Math.floor(randomNumber2*6)+1;

var rollDiceImg2="images/"+"dice"+b+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",rollDiceImg2);



if(a>b)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else if(b>a)
{
    document.querySelector("h1").innerHTML="Player2 wins🚩";

}
else{
    document.querySelector("h1").innerHTML="Draw!!"
}