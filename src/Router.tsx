import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Counter from "@/domains/counter/page";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Counter} />
    </Switch>
  </BrowserRouter>
);

export default Router;

