import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts.css";
import App from "./App";

import "tachyons"; //access to tachyons package similar to bootstrap
//import {robots} from "./robots";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App/>, document.getElementById("root"));
registerServiceWorker();
