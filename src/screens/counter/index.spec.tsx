import { render, screen, userEvent } from "@testing";
import Counter from ".";

test("counter", async () => {
  render(<Counter />);
  const counter = screen.getByTestId("counter");
  expect(counter).toHaveTextContent("0");
  userEvent.click(screen.getByTestId("inc"));
  expect(counter).toHaveTextContent("1");
  userEvent.click(screen.getByTestId("dec"));
  expect(counter).toHaveTextContent("0");
});
