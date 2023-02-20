import { render, screen, userEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmployeesForm from "./EmployeesForm";

describe("Test 1:", () => {
  const onSubmit = jest.fn();
  beforeEach(() => {
    onSubmit.mockClear();
    render(<EmployeesForm onSubmit={onSubmit} />);
  });
  it("onSubmit is called when all fields pass validation", async () => {
    userEvent;
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({ lazy: true });
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});

function getFullName() {
  return screen.getByRole("textbox", {
    name: /full name/i,
  });
}
