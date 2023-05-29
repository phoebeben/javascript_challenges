const agifyApiUrl = "https://api.agify.io/";
const insertResult = document.querySelector("#your-age");

const displayAge = (event) => {
  event.preventDefault();
  const firstName = document.getElementById("first-name").value;
  const url = `https://api.agify.io?name=${firstName}`;
  // TODO: Display your age with an AJAX call instead of the console.log()
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      insertResult.innerText = `You're ${data.age} years old.`;
    });
};

const form = document.getElementById("fetch-age");
form.addEventListener("submit", displayAge);
