import App from "../App";
import { render, screen } from "./testUtil";

describe("testing app", () => {
  it("test now", () => {
    render(<App />);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });
  it("testing Hello2", () => {
    render(<App />);
    expect(screen.getByText("hello2")).toBeDefined();
  });
});
