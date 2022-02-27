import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Button from "./Button";
const mockData = {
  typeButton: {
    Button: "button",
  },

  nameButton: "click",
};

test("render Button component", () => {
  render(
    <BrowserRouter>
      <Button buttonInfo={mockData} />
    </BrowserRouter>
  );
});

test("check the name", () => {
  render(
    <BrowserRouter>
      <Button buttonInfo={mockData} />
    </BrowserRouter>
  );
  const Btn = screen.getByRole("button");
  expect(Btn.textContent).toBe("click");
});
