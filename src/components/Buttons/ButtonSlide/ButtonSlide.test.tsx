import React from "react";
import { render } from "@testing-library/react";

import ButtonSlide from "./ButtonSlide";

describe("ButtonSlide", () => {
  test("renders the Button component", () => {
    render(<ButtonSlide label="Hello world!" />);
  });
});