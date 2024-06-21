import { render, screen, waitFor } from "@testing-library/react";
import { TasksProvider } from "../contexts/TasksContext";
import { fakeTasks } from "../data/fakeArray";
import { CompletedTasks } from "./CompletedTasks";
import { act } from "react";

global.fetch = jest.fn();
jest.useFakeTimers();

test("Showed completed tasks only", async () => {
   //arrange   
   await act(async () => {
      //act
      render(
         <TasksProvider initialTasks={fakeTasks}>
            <CompletedTasks />
         </TasksProvider>
      )
   });   
   
   //assert
   //expect(screen.getByText("Loading...")).toBeInTheDocument();

   await act(async () => {
      jest.runAllTimers();
   });

   await waitFor(() => {
      expect(screen.getByText("Mock: Prepare for meeting")).toBeInTheDocument();
   });

   await waitFor(() => {
      expect(screen.queryByText("Mock: Do workout at gym")).toBeNull();
   });

})