import { createContext, useContext, useState } from "react";
import { initialArray } from "../data/initialArray";

//Create the context
const TasksContext = createContext();

//Create provider component
export function TasksProvider({children}) {
   const [tasks, setTasks] = useState(initialArray);

   return (
      <TasksContext.Provider value={{tasks, setTasks}}>
         {children}
      </TasksContext.Provider>
   )
}

//Custom hook to use TasksContext
export function useTasks() {
   return useContext(TasksContext);
}