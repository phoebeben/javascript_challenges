import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["checkAll", "house", "apartment", "igloo", "cabin"]

  connect() {
    // TODO: console.log something!
    console.log("working!");
  }

  checkAll() {
    const checked = this.checkAllTarget.checked;
    const targets = [this.houseTarget, this.apartmentTarget, this.iglooTarget, this.cabinTarget];
    if (checked === true) {
      targets.forEach((target) => {
        target.checked = true;
      });
    } else {
      targets.forEach((target) => {
        target.checked = false;
      });
    }
  }
}
