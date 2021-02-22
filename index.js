//Using click event listner
var drumList = document.querySelectorAll("button");
var len = drumList.length;

for (var i = 0; i < len; i++) {
  drumList[i].addEventListener("click", function () {
    var buttonType = this.innerHTML;
    playSound(buttonType);
    highlightButton(buttonType);
  });
}

//Using keydown event lister
document.addEventListener("keydown", function (event) {
  var buttonType = event.key;
  playSound(buttonType);
  highlightButton(buttonType);
});

//plays the sound.
function playSound(buttonType) {
  var audio_file;
  switch (buttonType) {
    case "w":
      audio_file = "sounds/crash.mp3";
      break;
    case "a":
      audio_file = "sounds/kick-bass.mp3";
      break;
    case "s":
      audio_file = "sounds/snare.mp3";
      break;
    case "d":
      audio_file = "sounds/tom-1.mp3";
      break;
    case "j":
      audio_file = "sounds/tom-2.mp3";
      break;
    case "k":
      audio_file = "sounds/tom-3.mp3";
      break;
    case "l":
      audio_file = "sounds/tom-4.mp3";
      break;
    default:
      audio_file = "sounds/snare.mp3";
      break;
  }

  var audio = new Audio(audio_file);
  audio.play();
}

// highlights the button that got pressed.
function highlightButton(buttonType) {
  var buttonThatClicked = document.querySelector("." + buttonType);
  buttonThatClicked.classList.add("pressed");
  setTimeout(function () {
    buttonThatClicked.classList.remove("pressed");
  }, 300);
}
