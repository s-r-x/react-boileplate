import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "@/store";
import Router from "@/Router";
import "@/styles/index.css";

const store = createStore();
if (module.hot) module.hot.accept();
const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
