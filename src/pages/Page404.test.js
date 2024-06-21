import { fireEvent, render, screen } from "@testing-library/react"
import { Page404 } from './Page404';
import { TasksProvider } from "../contexts/TasksContext";
import { fakeTasks } from "../data/fakeArray";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AllTasks } from "./AllTasks";
import { act } from "react";

test("Clicked link to navigate to home page", () => {
   //assign   
   act(() => {
      //act
      render(
         <MemoryRouter initialEntries={['/some/bad/route']}>
            <TasksProvider initialTasks={fakeTasks}>
               <Routes>
                  <Route path="/some/bad/route" element={<Page404 />}/>
                  <Route path="/" element={<AllTasks />}/>
               </Routes>            
            </TasksProvider>
         </MemoryRouter>
         
      );
   });
   
   const link = screen.getByText("Go to Home Page");
   fireEvent.click(link);   
   //assert
   expect(screen.getByText("All Tasks")).toBeInTheDocument();
})