import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
// import TestRenderer from "react-test-renderer";
import Button from "./Button";

const mockData = {
  typeButton: {
    Link: true,
  },
  routeButton:"/",
  nameButton:"button"
};

test("render Button component", () => {
  render(
    <BrowserRouter>
      <Button buttonInfo={mockData } />
    </BrowserRouter>
  );
});