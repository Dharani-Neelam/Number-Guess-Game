const myguess = Math.floor(Math.random() * 10) + 1;

function guessNum() {
  const userguess = parseInt(document.getElementById("guess").value);
  const message = document.getElementById("message");
  if (userguess == myguess) {
    /*alert("You Won! The Game");*/
    message.textContent = "Congratulations You Won!The Game.....";
    alert("Congratulations You Won! The Game.....");
  } else if (userguess < myguess) {
    message.textContent = "Wrong! I am Bigger Than you Think.";
    /*alert("Wrong! I am Bigger Than you Think");*/
  } else {
    message.textContent = "Wrong! I am Smaller Than you Think.";
    /*alert("Wrong! I am Smaller Than you Think");*/
  }
}
