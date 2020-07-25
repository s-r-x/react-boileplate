import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "@/containers/App.tsx";
import { Provider } from "react-redux";
import store from "@/store";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import "@/styles/vendor.css";

if (module.hot) module.hot.accept();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
