import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

// mock data
const headerData = {
  logoWebsite: {
    srcLogo: "../images/apsLogo.jpg",
    alt: "APSignals",
  },
  routes: [
    {
      nameRoute: "Home",
      route: "/",
    },
    {
      nameRoute: "AboutUs",
      route: "/about-us",
    },
  ],
};

test("render navbar", () => {
  render(
    <BrowserRouter>
      <Navbar Info={{ headerData: headerData }} />
    </BrowserRouter>
  );
});

test("check the logo", () => {
  render(
    <BrowserRouter>
      <Navbar Info={{ headerData: headerData }} />
    </BrowserRouter>
  );
  const logo = screen.getByRole("img");
  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute("src", "../images/apsLogo.jpg");
  expect(logo).toHaveAttribute("alt", "APSignals");
});

test("check the button mode", () => {
  render(
    <BrowserRouter>
      <Navbar Info={{ headerData: headerData }} />
    </BrowserRouter>
  );

  const HomeBtn = screen.getAllByText(/Home/i);
  expect(HomeBtn.textContent).toBe("Home");
});
