// TODO: Autocomplete the input with AJAX calls.
const searchResult = document.querySelector("#search");
const insertAutocomplete = document.querySelector("#results");
console.log(insertAutocomplete);

const insertResults = (results) => {
  insertAutocomplete.innerHTML = "";
  results.forEach((result) => {
    const newResult = document.createElement("li");
    newResult.innerHTML = result;
    newResult.classList.add("list-group-item");
    newResult.classList.add("w-100");
    console.log(newResult);
    insertAutocomplete.appendChild(newResult);
  });
};

searchResult.addEventListener("keyup", (event) => {
  event.preventDefault();
  const url = `https://wagon-dictionary.herokuapp.com/autocomplete/${searchResult.value}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const autocomplete = data.words;
      insertResults(autocomplete);
    });
});
