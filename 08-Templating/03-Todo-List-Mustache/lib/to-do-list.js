// eslint-disable-next-line import/no-unresolved
import Mustache from "mustachejs";

const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true },
];

// TODO: Your code goes below:
const container = document.querySelector("#todosContainer");
const template = document.querySelector("#template").innerHTML;

todos.forEach((todo) => {
  const output = Mustache.render(template, {
    title: todo.title,
    checked: todo.done ? "checked" : ""
  });
  container.insertAdjacentHTML("beforeend", output);
});
