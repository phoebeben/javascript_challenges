import { Application } from "@hotwired/stimulus";

// TODO: Import the Stimulus Controller here
// eslint-disable-next-line import/extensions
import CheckAllCheckboxesController from "./controllers/check_all_checkboxes_controller.js";

window.Stimulus = Application.start();
// TODO: Register your Stimulus Controller below
// eslint-disable-next-line no-undef
Stimulus.register("check-all-checkboxes", CheckAllCheckboxesController);
