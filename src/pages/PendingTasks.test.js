import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import { TasksProvider } from "../contexts/TasksContext";
import { fakeTasks } from "../data/fakeArray";
import { PendingTasks } from "./PendingTasks";

global.fetch = jest.fn();
jest.useFakeTimers();

test("Showed pending tasks only", async () => {
   //assign
   await act(async () => {
      //act
      render(
         <TasksProvider initialTasks={fakeTasks}>
            <PendingTasks />
         </TasksProvider>
      )
   });
   //assert
   //expect(screen.getByText("Loading...")).toBeInTheDocument();

   await act(async () => {
      jest.runAllTimers();
   });

   await waitFor(() => {
      expect(screen.getByText("Mock: Do workout at gym")).toBeInTheDocument();
   });

   await waitFor(() => {
      expect(screen.queryByText("Mock: Prepare for meeting")).toBeNull();
   })
   
})