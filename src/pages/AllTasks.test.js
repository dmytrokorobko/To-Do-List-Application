import { render, screen, waitFor } from "@testing-library/react";
import { AllTasks } from "./AllTasks";
import { TasksProvider } from "../contexts/TasksContext";
import { fakeTasks } from "../data/fakeArray";
import { act } from "react";

global.fetch = jest.fn();
jest.useFakeTimers();

test("fetches mock data and display", async () => {
   //act
   render(
      <TasksProvider initialTasks={fakeTasks}>
         <AllTasks />
      </TasksProvider>
   );

   //assert
   //expect(screen.getByText("Loading...")).toBeInTheDocument();
   
   await act(async () => {
      jest.runAllTimers();
   });

   await waitFor(() => {
      expect(screen.getByText("Mock: Do workout at gym")).toBeInTheDocument();            
   });
   await waitFor(() => {
      expect(screen.getByText("Mock: Prepare for meeting")).toBeInTheDocument();
   });
   
})