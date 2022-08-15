import React from "react";
import { render } from "@testing-library/react";

import Button2 from "./Button2";

describe("Button2", () => {
  test("renders the Button component", () => {
    render(<Button2 label="Hello world!" />);
  });
});