import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MenuOption from "../components/MenuOption";
import Navbar from "../Navbar";
import { Element } from "react-scroll";

const NavOption = () => <MenuOption label="Menu" link="menu" />;

describe("MenuOption", () => {
  test("should display the correct label", () => {
    render(<NavOption />);
    expect(screen.getByText("Menu")).toBeInTheDocument();
  });

  test("should scroll to link when clicked", () => {
    render(<NavOption />);
    render(<div style={{ height: 1000000, width: 100 }} />);
    render(
      <Element name="menu">
        <h1>Off-Screen</h1>
      </Element>
    );

    const navOption = screen.getByText("Menu");
    fireEvent.click(navOption);

    const element = screen.getByText("Off-Screen");
    expect(element).toBeVisible();
  });
});

describe("NavBar", () => {
  test("should have the logo, 4 menu links and a CV download link", async () => {
    render(<Navbar />);
    expect(screen.queryAllByRole("link")).toHaveLength(5);
    expect(screen.getByRole("img"));
  });
});
