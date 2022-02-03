import React from "react";
import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import Button from "./Button";
const propsButton = {
  colorButton: "primary",
  nameButton: "click",
  routeButton: "/",
  typeButton: {
    linkButton: true,
  },
  eventButton: () => {
    console.log("hello");
  },
  costumeStyle: {
    width: " 10px",
  },
};

test("render Button component", () => {
  TestRenderer.create(
    <BrowserRouter>
      <Button Info={propsButton} />
    </BrowserRouter>
  );
});
describe("check props", () => {
  test("check colorButton", () => {
    const { colorButton } = propsButton;
    expect(colorButton).toStrictEqual("primary" || "secondary");
    expect(colorButton).toBeDefined();
    expect(colorButton).toBe("primary" || "secondary");
  });
  test("check nameButton", () => {
    const { nameButton } = propsButton;
    expect(nameButton).toStrictEqual("click");
    expect(nameButton).toBeDefined();
    expect(nameButton).toBe("click" || "submit");
  });
  test("check routeButton", () => {
    const { routeButton } = propsButton;
    expect(routeButton).toMatch("/");
    expect(routeButton).toBeDefined();
  });
  describe("check type button", () => {
    test("check type linkBtn", () => {
      const { linkButton } = propsButton.typeButton;
      expect(linkButton).toBeTruthy();
    });
  });
});
