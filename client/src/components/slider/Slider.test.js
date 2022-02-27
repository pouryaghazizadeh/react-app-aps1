import { fireEvent, render, screen } from "@testing-library/react";
import dataSlider from "../../constants/slider.json";
import Slider from "./Slider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
test("render slider", () => {
  render(<Slider dataSlider={dataSlider} />);
});

test("check next button", () => {
  render(<Slider dataSlider={dataSlider} />);
  const current = 0;
  const length = dataSlider.secondData;
  const nextArrow = screen.getByRole("", {
    name: <ArrowForwardIosIcon/>,
  });

  fireEvent.click(nextArrow);

});
