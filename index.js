for (var i = 0; i < 8; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",
        function () {    //NORMAL FUNCTIONS AND ANONYMOUS FUNCTIONS PERFORM SAME OPERATION
            //alert("I got clicked");
            // var audio=new Audio("sounds/tom-1.mp3");
            // audio.play();
            var buttonInnerHTML = this.innerHTML;
            switch (buttonInnerHTML) {
                case "w":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
                case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
                case "d":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
                case "j":
                    var snare_audio = new Audio("sounds/snare.mp3");
                    snare_audio.play();
                    break;
                case "k":
                    var crash_audio = new Audio("sounds/crash.mp3");
                    crash_audio.play();
                    break;
                case "l":
                    var kickbass_audio = new Audio("sounds/kick-bass.mp3");
                    kickbass_audio.play();
                    break;
                default:
                    console.log(buttonInnerHTML);
            }
        });
}

