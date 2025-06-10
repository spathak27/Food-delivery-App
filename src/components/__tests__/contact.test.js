import { getAllByRole, render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page test case", () => {
  beforeAll(() => {
    // afterAll
    //console.log("before all");
  });

  beforeEach(() => {
    // afterAll
    //console.log("before each");
  });

  test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("should load input name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
