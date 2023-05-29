const batch = 1231; // change to your own batch id
const baseUrl = "https://wagon-chat.herokuapp.com/";

// Your turn to code!

const message = document.querySelector("#your-message");
const sender = document.querySelector("#your-name");
const form = document.querySelector("#comment-form");
const refresh = document.querySelector("#refresh");

const list = document.querySelector(".list-unstyled");

const updateChat = () => {
  list.innerHTML = "";
  const refreshUrl = `${baseUrl}${batch}/messages`;
  fetch(refreshUrl)
    .then(response => response.json())
    .then((data) => {
      data.messages.forEach((result) => {
        const displayMessage = document.createElement("li");
        displayMessage.innerHTML = `${result.content} (posted <span class="date">10 minutes ago</span>) by ${result.author}`;
        list.appendChild(displayMessage);
      });
    });
};

updateChat();
form.addEventListener("submit", (event) => {
  const url = `${baseUrl}${batch}/messages`;
  fetch(url, {
    method: "POST",
    headers: {},
    body: JSON.stringify({ author: sender.value, content: message.value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
  updateChat();
});
