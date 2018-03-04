import React from "react";
import ReactDOM from "react-dom";
import "./containers/index.css";
import "./containers/fonts.css";
import App from "./containers/App.js";

import "tachyons"; //access to tachyons package similar to bootstrap
//import {robots} from "./robots";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
