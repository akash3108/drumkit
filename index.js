// instructions
alert("You can either click on the drum pics by mouse or you can play by your keyboard.Just type the character specified.Thank You.");

// applies for the mouse click event
for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makesound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}
// applies for the keyboard event
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

// applies the sound for each stroke or click.
function makesound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log("Poor stroke!");
            break;

    }
}

function buttonAnimation(currentKey){
    // checks for which element is active
    var activeKey=document.querySelector("."+currentKey);
    // change the css style by adding a different class
    activeKey.classList.add("pressed");
    // set a timeout to change it to previous while button not pressed
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
}