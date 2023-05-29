const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true }
];

// TODO: Use the template in the `index.html` to dynamically generate a list based on `todos` array

const template = document.querySelector("#todoItemTemplate");
const container = document.querySelector("#todosContainer");

todos.forEach((todo) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector(".title").innerHTML = todo.title;
  const checkbox = clone.querySelector("input[type=checkbox]");
  if (todo.done === true) { checkbox.checked = true; }
  container.appendChild(clone);
});
