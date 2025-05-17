import { HoroscopeModel } from "./model/HoroscopeModel.js";
import { HoroscopeView } from "./view/HoroscopeView.js";
import { HoroscopeController } from "./controller/HoroscopeController.js";

const model = new HoroscopeModel();
const view = new HoroscopeView();
const controller = new HoroscopeController(model, view);

controller.init();
