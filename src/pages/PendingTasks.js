import { Item } from "../components/Item";
import { useTasks } from "../contexts/TasksContext";

export function PendingTasks() {
   const {tasks, loading} = useTasks();
   return (
      <div className="page-content">
         <h1 className="page-caption">Completed Tasks</h1>
         {!loading ? (
            <div className="tasks">
               {tasks.filter(f => f.isCompleted === false).map((task, index) => (
                  <div key={index}>
                     <Item task={task} />                  
                  </div>
               ))}
            </div>
         ) : (
            <p>Loading...</p>
         )}         
      </div>
   )
}