import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ExperienceListing from "../components/ExperienceListing";

test("should be in the document", () => {
  render(
    <ExperienceListing
      companyName="1"
      jobTitle="2"
      dates="3"
      description={["4", "5", "6", "7"]}
    />
  );
  for (let i = 1; i < 8; i++) {
    expect(screen.getByText(`${i}`)).toBeInTheDocument();
  }
});
