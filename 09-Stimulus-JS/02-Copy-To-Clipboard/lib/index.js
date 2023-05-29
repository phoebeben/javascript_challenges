import { Application } from "@hotwired/stimulus";

// TODO: Import the Stimulus Controller here
// eslint-disable-next-line import/extensions
import CopyToClipboardController from "./controllers/copy_to_clipboard_controller.js";

window.Stimulus = Application.start();
// TODO: Register your Stimulus Controller below
// eslint-disable-next-line no-undef
Stimulus.register("copy-to-clipboard", CopyToClipboardController);
