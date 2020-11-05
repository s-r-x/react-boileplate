import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "@/store";
import Router from "@/Router";
import { GlobalStyle } from "@/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import "@/styles/vendor.css";

if (module.hot) module.hot.accept();
const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
