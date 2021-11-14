// function handleClick() {
//     alert("I got clicked!")
// }

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // var audio = new Audio("./sounds/crash.mp3");
    // audio.play();

    // this.style.color = "white";
    if (this.innerHTML === "w") {
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
    } else if (this.innerHTML === "a") {
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
    } else if (this.innerHTML === "s") {
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
    } else if (this.innerHTML === "d") {
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
    } else if (this.innerHTML === "j") {
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
    } else if (this.innerHTML === "k") {
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
    } else if (this.innerHTML === "l") {
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
    }
  });
}

// function myFunction(event) {
//   var x = event.key;

//   // If the pressed keyboard button is "a" or "A" (using caps lock or shift), alert some text.
//   if (x == "a" || x == "A") {
//     alert ("You pressed the 'A' key!");
//   }
// }

// Add event listener on keydown
document.addEventListener(
  "keydown",
  (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    // console.log(`Key pressed ${name} \r\n Key code value: ${code}`);

    if (name === "w") {
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
    } else if (name === "a") {
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
    } else if (name === "s") {
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
    } else if (name === "d") {
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
    } else if (name === "j") {
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
    } else if (name === "k") {
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
    } else if (name === "l") {
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
    }
  },
  false
);
