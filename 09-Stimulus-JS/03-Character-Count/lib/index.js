import { Application } from "@hotwired/stimulus";

// TODO: Import the Stimulus Controller here
// eslint-disable-next-line import/extensions
import CharacterCountController from "./controllers/character_count_controller.js";

window.Stimulus = Application.start();
// TODO: Register your Stimulus Controller below
// eslint-disable-next-line no-undef
Stimulus.register("character-count", CharacterCountController);
