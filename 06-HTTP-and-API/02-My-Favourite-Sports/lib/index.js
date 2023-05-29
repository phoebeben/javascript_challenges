// TODO: write your code here!
// select the element we want to make clickable
const sports = document.querySelectorAll(".clickable");

// sports.forEach((button) => {
//   button.addEventListener("click", () => {
//     button.classList.toggle("active");
//   });
// });

const activeButton = (event) => {
  event.currentTarget.classList.toggle("active");
};

const bindButtonToClick = (button) => {
  button.addEventListener('click', activeButton);
};

sports.forEach(bindButtonToClick);
