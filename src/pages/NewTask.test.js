import { act } from "react";
import { NewTask } from "./NewTask";
import { render, screen, waitFor } from "@testing-library/react";
import { TasksProvider } from "../contexts/TasksContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { AllTasks } from "./AllTasks";
import { fakeTasks } from "../data/fakeArray";

global.fetch = jest.fn();
jest.useFakeTimers();

test("Created new task", async () => {
  const testTask = "Test task 1";

  // Render the initial route
  await act(async () => {
    render(
      <MemoryRouter initialEntries={['/new']}>
        <TasksProvider initialTasks={fakeTasks}>
          <Routes>
            <Route path='/new' element={<NewTask />} />
            <Route path='/' element={<AllTasks />} />
          </Routes>
        </TasksProvider>
      </MemoryRouter>
    );
  });

  // Verify the NewTask form is rendered
  expect(screen.getByText("Create New Task")).toBeInTheDocument();

  // Fill out the form and submit
  const input = screen.getByRole("textbox");
  await userEvent.type(input, testTask);
  const button = screen.getByRole("button", { name: /create/i });

  await act(async () => {
    userEvent.click(button);
  });

  // Ensure timers are properly handled
  await act(async () => {
    jest.runAllTimers();
  });

  // Wait for the AllTasks page to render and check for the new task
  await waitFor(() => {
    expect(screen.getByText("All Tasks")).toBeInTheDocument();
  });

  // Check if the new task is in the document
  await waitFor(() => {
    expect(screen.getByText(testTask)).toBeInTheDocument();
  });
});
