import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Cursor from "../Cursor";

test("should be in the document", () => {
  render(<Cursor />);
  expect(screen.getByTestId("pointer")).toBeInTheDocument();
});

// test("should follow the cursor", () => {
//   const position = { clientX: 10, clientY: 15 };
//   render(<Cursor />);
//   render(<div style={{ height: 100, margin: 50 }} />);
//   render(<p>.</p>);
//   const cursor = screen.getByTestId("pointer");
//   const target = screen.getByText(".");
//   fireEvent.mouseMove(target);
//   expect(cursor).toBeCloseTo(target);
// });
