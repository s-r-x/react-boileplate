import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Router from "@/Router";
import "@/styles/index.less";

if (module.hot) module.hot.accept();
const App = () => <Router />;

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
