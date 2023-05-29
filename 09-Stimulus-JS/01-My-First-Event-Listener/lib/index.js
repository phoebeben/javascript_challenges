import { Application } from "@hotwired/stimulus";

// eslint-disable-next-line import/extensions
import EventListenerController from "./controllers/event_listener_controller.js";

window.Stimulus = Application.start();
// eslint-disable-next-line no-undef
Stimulus.register("event-listener", EventListenerController);
