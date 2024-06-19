import { createContext, useContext, useEffect, useState } from "react";
import { initialArray } from "../data/initialArray";

//Create the context
const TasksContext = createContext();

//Create provider component
export function TasksProvider({children}) {
   const [tasks, setTasks] = useState([]);

   //fetch data from API
   useEffect(() => {
      const getArray = new Promise((resolve, reject) => {
         setTimeout(() => {
            if (initialArray !== undefined && initialArray.length > 0) resolve(initialArray);
            else reject("No connection with server");
         }, 3000);
      });

      // getArray
      // .then((resolvedData) => {
      //    if (resolvedData !== undefined && resolvedData.length > 0) return resolvedData;
         
      //    throw new Error("Data has been corrupted");
      // })
      // .then(null, (rejected) => {
      //    alert("Check connection with server and try again!");
      // })
      // .then((data) => {
      //    setTasks(data);
      // })
      // .catch((error) => {
      //    console.log(error);
      // })

      async function showArray() {
         const data = await getArray;
         if (data === undefined && data.length === 0) {
            alert("Check connection with server and try again!");
            return;
         }
         setTasks(data);
      }

      showArray();

   }, []);

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