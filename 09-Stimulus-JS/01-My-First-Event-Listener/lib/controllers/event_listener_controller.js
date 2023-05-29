import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("working!!");
  }

  disable() {
    this.element.innerText = "Bingo!";
    this.element.setAttribute("disabled", "");
    const audio = new Audio('../sound.mp3');
    audio.play();
  }
}
