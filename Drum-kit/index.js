for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
     var buttonClick=this.innerHTML;
     makesound(buttonClick);
     buttonAnimation(buttonClick);
    });

}
/* above we  taregted the class which is having name drum and we 
added addEventListener("click",anonymous function)*/

/* we can even write the function as 

document.querySelectorAll(".drum").addEventListener("click",sai);

function sai()
{
    alert("clicked");
}
 note that we didnt pass as sai(),we have passed without braces beacuse it we give braces it 
 will load continuously*/


 /*addEventListener(input1,input2) it has 2 arguments 1st is EventListener i.e click,mouse ..etc
 and 2nd is java script function*/

 //for keyboard
 document.addEventListener("keypress",function(event){
     makesound(event.key);//key is the value that we preess
     buttonAnimation(event.key);
 });

 function makesound(key)
 {
    switch(key){
        case "a":
            var audio1=new Audio("sounds/crash.mp3");
            audio1.play();
        break;

        case "s":
            var audio2=new Audio("sounds/kick-bass.mp3");
            audio2.play();
        break;

        case "k":
            var audio3=new Audio("sounds/snare.mp3");
            audio3.play();
        break;

        case "h":
            var audio4=new Audio("sounds/tom-1.mp3");
            audio4.play();
        break;

        case "e":
            var audio5=new Audio("sounds/tom-2.mp3");
            audio5.play();
        break;

        case "l":
            var audio6=new Audio("sounds/tom-3.mp3");
            audio6.play();
        break;

        case "p":
            var audio7=new Audio("sounds/tom-4.mp3");
            audio7.play();
        break;

        default:console.log("Plese press as shown on the screen");

    }


 }

 //For animations

 function buttonAnimation(key){
     var activeButton=document.querySelector("."+key);
     activeButton.classList.add("pressed");


     // to set timeout
     setTimeout(function(){
         activeButton.classList.remove("pressed")

     },100);

 }