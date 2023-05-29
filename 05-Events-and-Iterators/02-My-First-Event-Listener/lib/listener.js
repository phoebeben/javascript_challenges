// TODO: React to a click on the button!
const button = document.querySelector("#clickme");
const audio = new Audio('../sound.mp3');

button.addEventListener("click", (event) => {
  event.currentTarget.classList.add(".disabled");
  event.currentTarget.innerText = "Bingo!";
  audio.play();
});
