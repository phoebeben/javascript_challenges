/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */

import runChallenges from "../spec/inbox_examiner.js";

const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  const probability = Math.random();
  const result = probability <= 0.2;
  return result;
};

const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
  const random = ["random", "new", "crazy", "ram", "chicken", "dog"];
  const randomIndex = Math.floor(Math.random() * random.length);
  const item = random[randomIndex];
  const message = { subject: `${item}`, sender: `${item}` };
  return message;
};

const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  const inbox = document.querySelectorAll("#inbox div div");
  const inboxAdded = inbox.add(`<div class="row message read"><div class="col-3">${message.sender}</div><div class="col-9">${message.subject}</div></div>`);
  return inboxAdded;
};

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
};

// Do not remove these lines.
if (typeof window === "object") {
  document.addEventListener("DOMContentLoaded", () => {
    setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
  });
}

// Checking exercise answers. DO NOT MODIFY THIS LINE.
runChallenges(hasNewMessage, newMessage);
export { hasNewMessage, newMessage };
