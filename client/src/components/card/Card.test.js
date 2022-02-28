import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Cards from "./Card";
const mock = {
  titleCard: "Full-Stack",
  imageUrl: "../images/p.jpg",
  descriptionCard: "hi there",
};
test("render cards", () => {
  render(<Cards Info={mock} />);
});
test("check the img", () => {
 const {getByAltText}= render(<Cards Info={mock} />);
  const img = screen.getByAltText("Full-Stack");
  expect(img).toHaveAttribute("src", "../images/p.jpg");
  expect(img).toHaveAttribute("alt", "Full-Stack");
});

test("check the title", () => {
  const { getByText } = render(<Cards Info={mock} />);
  const title = screen.getByText("Full-Stack");
  expect(title).toHaveTextContent("Full-Stack");

});

test("check the desc", () => {
  const { getByText } = render(<Cards Info={mock} />);
  const desc = screen.getByText("hi there");
  expect(desc).toHaveTextContent("hi there");
});
