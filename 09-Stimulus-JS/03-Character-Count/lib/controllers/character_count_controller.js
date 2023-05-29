import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["textArea", "count"]
  // connect() {
  //   // TODO: console.log something!
  //   console.log("working!");
  // }

  updateCounter() {
    const characterCount = this.textAreaTarget.value.length;
    this.countTarget.innerHTML = `${characterCount} characters`;
    this.#characterLimit(characterCount);
  }

  #characterLimit(characters) {
    const limit = 140;
    if (characters >= 140) {
      this.countTarget.classList.add("text-danger");
      this.countTarget.innerHTML = `Number of characters exceeded by ${characters - limit} characters.`;
    }
  }
}
