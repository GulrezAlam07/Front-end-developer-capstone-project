import {
  fireEvent,
  render,
  screen,
  queryByAttribute,
} from "@testing-library/react";

import BookingForm from "./Components/BookingForm";

test("The Heading displays on the page", () => {
  render(<BookingForm />);
  const Heading = screen.getByText("Reserve a Table");
  expect(Heading).toBeInTheDocument();
});

test("initializeTimes Renders as expected", () => {
  render(<BookingForm />);
  const testTime = screen.getAllByText(/([0-1][0-9]|2[0-3]):[0-5][0-9]/);
  expect(testTime.length >= 5).toBe(true);
});

test("updateTimes Renders as expected", () => {
  render(<BookingForm />);
  const getById = queryByAttribute.bind(null, "id");
  const view = render(<BookingForm />);
  const dateInput = getById(view.container, "res-date");

  const todayTimes = screen.getAllByText(/([0-1][0-9]|2[0-3]):[0-5][0-9]/);
  fireEvent.change(dateInput, { target: { value: 15 } });
  const updatedTimes = screen.getAllByText(/([0-1][0-9]|2[0-3]):[0-5][0-9]/);
  expect(todayTimes !== updatedTimes).toBe(true);
});
