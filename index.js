// function handleClick(){
//     let audio= new Audio("./sounds/tom-1.mp3");
//     audio.play();
//     this.style.color= "green";
// }

// for(let i=0 ;i<document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick)
// }

//DETECTING BUTTON PRESSES

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML= this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

//DETECTING KEYBOARD PRESS
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    //Calling Method for Animation
    buttonAnimation(event.key);
})

//SWITCH CASE 
function makeSound(key){
    switch (key) {
        case "w":
            let audio1 = new Audio('sounds/crash.mp3');
            audio1.play();
            break;

        case "a":
            let audio2 = new Audio("sounds/kick-bass.mp3");
            audio2.play();
            break;
        case "s":
            let audio3 = new Audio("sounds/snare.mp3");
            audio3.play();
            break;
        case "d":
            let audio4 = new Audio("sounds/tom-1.mp3");
            audio4.play();
            break;
        case "j":
            let audio5 = new Audio("sounds/tom-1.mp3");
            audio5.play();
            break;
        case "k":
            let audio6 = new Audio("sounds/tom-1.mp3");
            audio6.play();
            break;
        case "l":
            let audio7 = new Audio("sounds/tom-1.mp3");
            audio7.play();
            break;
        default:
    }
    buttonAnimation(key);
}

function buttonAnimation(currentKey){
    let activeButton= document.querySelector("."+currentKey);
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
} //100 means 0.1 seconds
//That means after 0.1 seconds pressed class will be removed from the current key class.