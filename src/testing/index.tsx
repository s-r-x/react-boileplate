import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { createStore } from "@/store";
import { Provider } from "react-redux";

const WithProviders: React.FC = (props) => {
  const store = createStore();
  return <Provider store={store}>{props.children}</Provider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => {
  return render(ui, { wrapper: WithProviders, ...options });
};

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };
