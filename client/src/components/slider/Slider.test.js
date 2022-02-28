import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Slider from "./Slider";
// this is mock data
const mock = {
  id: 2,
  firstText: "hi",
  secondText: "bye",
  alt: "image2",
  url: "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
};

test("render slider", () => {
  render(<Slider dataSlider={mock} />);
});
test("check the img", () => {
  const { getByAltText } = render(<Slider dataSlider={mock} />);
  const img = screen.getByAltText("image2");
  expect(img).toHaveAttribute(
    "src",
    "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
  );
  expect(img).toHaveAttribute("alt", "image2");
});
// test("check next button", () => {
//   render(<Slider dataSlider={mock} />);
//   const nextArrow = screen.getByRole("", {
//     name: <ArrowForwardIosIcon />,
//   });

//   fireEvent.click(nextArrow);
// });
