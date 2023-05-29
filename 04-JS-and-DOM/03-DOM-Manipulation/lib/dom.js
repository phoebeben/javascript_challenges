/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */
import runChallenges from "../spec/examiner.js";

// INSTRUCTIONS - PLEASE READ!!
// Here are some challenges. Solve them from top to bottom

// **Each time** you complete a challenge, please commit and push!
// This is a good practice. Each time you make some progress in software
// development, you want to save a snapshot.


// Ex 1. Read what's written in the email input
//       Make the function getEmail() return it
const getEmail = () => {
  // TODO: return the email
  const email = document.querySelector("#email");
  return email.value;
};

// /!\ DO NOT CHANGE THIS LINE - TEST PURPOSES
const borisesEmail = getEmail();

// Ex 2. Change the content of the email input by writing your own email address
const email = document.querySelector("#email");
email.value = "phoebe.benbow@hotmail.co.uk";

// Ex 3. Replace the email hint (next to the input) with 'This is my email now'
//       The text should be emphasized using a <strong> tag
const emailHint = document.querySelector("#email-hint");
emailHint.innerHTML = "<strong>This is my email now</strong>";

// Ex 4. Add the .blue CSS class to the th elements

const theElements = document.querySelectorAll('.table th');
theElements.forEach(th => th.classList.add('blue'));

// document.addEventListener('DOMContentLoaded', addBlueClassToTh);

// Ex 5. Count the number of table body rows there are
//       Make the function teamCount() return it
const teamCount = () => {
  // TODO: return the number of teams
  const numberOfTeam = document.querySelector('.table tbody').rows.length;
  return numberOfTeam;
};

// /!\ DO NOT CHANGE THIS LINE - TEST PURPOSES
const teamCountBeforeAddition = teamCount();

// Ex 6. Say there is a 15th team added to the table.
//       Add a row at the bottom, this new team should have zero points.
const numberOfTeam = document.querySelector('.table tbody');
numberOfTeam.insertAdjacentHTML("beforeend", "<tr><td>15</td><td>New Olympique</td><td>0</td></tr>");

// Ex 7. Write some code to sum all points given to all teams
//       Make the function summarizePoints() return it
const summarizePoints = () => {
  // TODO: return the sum
  const pointCells = document.querySelectorAll('.table tbody td:nth-child(3)');
  let sum = 0;
  pointCells.forEach((cell) => {
    sum += parseInt(cell.innerText, 10);
  });
  return sum;
};


// Ex 8. Change the background color of all `<th>` cells to #DDF4FF
const thElements = document.querySelectorAll(".table th");
thElements.forEach((th) => {
  th.style.backgroundColor = "#DDF4FF";
});


// Ex 9. Remove the "Email:" label from the DOM
const emailLabel = document.querySelector("label");
emailLabel.remove();

// Checking exercise answers. DO NOT MODIFY THIS LINE
runChallenges(borisesEmail, teamCountBeforeAddition, summarizePoints);
