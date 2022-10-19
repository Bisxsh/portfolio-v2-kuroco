import React from "react";
import { render, screen } from "@testing-library/react";
import MenuOption from "../components/MenuOption";

// You have to write data-testid
const Title = () => <h1 data-testid="hero-title">Gatsby is awesome!</h1>;
const NavOption = () => <MenuOption label="Menu" link="#menu" />;

test("Displays the correct title", () => {
  const { getByTestId } = render(<Title />);
  // Assertion
  expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!");
  // --> Test will pass
});

test("should display the correct label", () => {
  const { getByTestId } = render(<NavOption />);
  expect(screen.getByText("Menu")).toBeInTheDocument();
});
