import React from "react";
import { render } from "@testing-library/react";
import Home from "../pages/Home";

describe("Test Home Page", () => {
  it("renders snapshot as expected", () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });

  it("should show submit button", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("submit").textContent).toBe("Submit");
  });
});
