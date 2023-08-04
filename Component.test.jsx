/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { Component } from "./Component";

describe("Component", () => {
  it("renders", () => {
    const { container } = render(<Component />);
    expect(container).toMatchSnapshot();
  });
});
