import { Item } from "../components/Item";
import { useTasks } from "../contexts/TasksContext"

export function AllTasks() {
   const {tasks} = useTasks();
   return (
      <div className="page-content">
         <h1 className="page-caption">All Tasks</h1>
         <div className="tasks">
            {tasks.map((task, index) => (
               <div key={index}>
                  <Item task={task} />
               </div>
            ))}
         </div>
      </div>
   )
}