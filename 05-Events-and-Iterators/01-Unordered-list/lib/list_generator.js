/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */

import runChallenges from "../spec/list_generator_examiner.js";

const listItem = (content) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)
  return `<li class="list-group-item">${content}</li>`;
};

const unorderedList = (items) => {
  // TODO: return the proper <ul> markup (as a string)
  let string = "";
  items.forEach((item) => {
    string += listItem(item);
  });
  return `<ul class="list-group">${string}</ul>`;
};

// Do not remove these lines:
if (typeof window === "object") {
  document.addEventListener("DOMContentLoaded", () => {
    // TODO: call unorderedList() passing the right element
    // TODO: display the list in the browser
    const groceries = ['milk', 'butter', 'bread'];
    const display = unorderedList(groceries);
    const list = document.querySelector("#list");
    list.insertAdjacentHTML("beforeend", display);
  });
}

runChallenges(listItem, unorderedList); // Do not remove.
export { listItem, unorderedList };
