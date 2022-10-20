import { fireEvent, render, screen } from "@testing-library/react";
import { delay } from "framer-motion";
import React from "react";
import { act } from "react-test-renderer";
import Hero from "../Hero";

test("should have a typewriter as a subheading", async () => {
  act(() => {
    render(<Hero />);
  });
  const heading = screen.getByRole("heading", { level: 2 });
  expect(heading).toBeInTheDocument();
  let textBefore = heading.innerHTML;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  expect(textBefore).not.toEqual(heading.innerHTML);
});
