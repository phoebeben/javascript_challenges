import { Application } from "@hotwired/stimulus";
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";
// TODO: Import Chartjs external library

// TODO: Import the Stimulus Controller here
// eslint-disable-next-line import/extensions
import DoughnutChartController from "./controllers/doughnut_chart_controller.js";

window.Stimulus = Application.start();

// TODO: Register all Chartjs controllers
const controllers = Object.values(Chartjs).filter(
  chart => chart.id !== undefined
);
Chart.register(...controllers);
// TODO: Register your Stimulus Controller below
// eslint-disable-next-line no-undef
Stimulus.register("doughnut-chart", DoughnutChartController);
