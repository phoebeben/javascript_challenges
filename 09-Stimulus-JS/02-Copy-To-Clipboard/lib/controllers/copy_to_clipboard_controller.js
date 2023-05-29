import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input", "button"]

  static values = {
    text: String
  }
  // connect() {
  //   console.log("hello");
  // }

  copy() {
    // console.log("copied");
    // get the value in the button.
    const input = this.inputTarget.value;
    this.buttonTarget.setAttribute("disabled", "");
    this.buttonTarget.innerHTML = this.textValue;
    this.#copyToClipboard(input);
  }

  #copyToClipboard(input) {
    const type = 'text/plain';
    const blob1 = new Blob([input], { type });
    // eslint-disable-next-line no-undef
    const data = [new ClipboardItem({ [type]: blob1 })];
    navigator.clipboard.write(data).then(
      () => {
        /* success */
      },
      () => {
        /* failure */
      }
    );
  }
}
