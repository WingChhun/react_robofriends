import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/*Switch between paths, render the corresponding component*/}
      <Route exact path="/" component={StorePicker} />

      <Route exact path="/store/:storeId" component={App} />

      {/*Error 404 page when path is not handled*/}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
