const searchForm = document.getElementById("searchForm");
const restaurantList = document.querySelector("#restaurant-list");
const category = document.querySelectorAll(".form-check-input");

// Todo: select the HTML elements you need


searchForm.addEventListener("submit", (event) => {
  // Todo: Find the category selected and build the URL you will send your request to
  event.preventDefault();
  category.forEach(element => console.log(element));
  // Todo: Replace "the-endpoint-url" with the URL you built
  // fetch(`GET https://the-fork-api.students.lewagon.co/api/v1/restaurants?category=italian&location=kochfurt`)
  //   .then(response => response.json())
  //   .then((data) => {
  //     // Todo: Insert results into the list

  //   });
});
