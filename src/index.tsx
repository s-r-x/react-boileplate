import * as React from "react";
import * as ReactDOM from "react-dom";
import Router from "@/Router";
import "@/styles/index.css";

if (module.hot) module.hot.accept();
const App = () => <Router />;

ReactDOM.render(<App />, document.getElementById("root"));
