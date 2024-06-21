import { createContext, useContext, useEffect, useRef, useState } from "react";
import { initialArray } from "../data/initialArray";

// Create the context
const TasksContext = createContext();

// Custom hook to use TasksContext
export function useTasks() {
  return useContext(TasksContext);
}

// Create provider component
export function TasksProvider({ children, initialTasks = [] }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    console.log('1. hasLoadedRef.current before:', hasLoadedRef.current);

    if (hasLoadedRef.current) {
      console.log('Skipping loading as data is already loaded.');
      setLoading(false);
      return;
    }

    const getArray = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (initialArray !== undefined && initialArray.length > 0) resolve(initialArray);
        else reject("No connection with server");
      }, 3000);
    });

    async function showArray() {
      try {
        let data = []; 
        if (initialTasks.length > 0) data = initialTasks;
        else data = await getArray;
        
        console.log("2. Fetched data:", data);
        if (data === undefined || data.length === 0) {
          alert("Check connection with server and try again!");
          return;
        }
        setTasks(data);
        hasLoadedRef.current = true; // Set the ref to true after loading data
        console.log('3. hasLoadedRef.current after:', hasLoadedRef.current);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    showArray();
  }, [initialTasks]);

  function addTask(task) {
    console.log("6. Adding task:", task); // Log the task being added
    setTasks((prev) => {
      const updatedTasks = [task, ...prev];
      console.log("7. Updated tasks:", updatedTasks); // Log the updated tasks
      return updatedTasks;
    });
  }

  return (
    <TasksContext.Provider value={{ tasks, setTasks, addTask, loading }}>
      {children}
    </TasksContext.Provider>
  );
}
