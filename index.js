var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}




/*

// Trash Of Mine



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

/*
  other way of sounding clicks:
  
  for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

      var buttonInnerHTML = this.innerHTML;

      switch (buttonInnerHTML) {
        case "w":
          var crash = new Audio("./sounds/crash.mp3");
          crash.play();
          break;
        
        case "a":
          var kick = new Audio("./sounds/kick-bass.mp3");
          kick.play();
          break;
        
        // And so on
        
        // In the end:
        default: console.log(this.innerHTML);
      }
    })
  }
*/

// function BellBoy (name, age, hasWorkPermit, languages) {
//   this.name = name;
//   this.age = age;
//   this.hasWorkPermit = hasWorkPermit;
//   this.languages = languages;
//   this.moveSuitcase = function() {
//     alert("May I take your suitcase?");
//     pickUpSuitcase();
//     move();
//   }
// }
