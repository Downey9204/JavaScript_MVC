import Controller from "./controllers/Controller";
import Store from "./models/Store";
const TAG = "[Init]";

const init = () => {
  console.log(TAG);
  const data = require("./json/items.json");
  const store = new Store(data);

  console.log(store);
};

window.addEventListener("load", init);
