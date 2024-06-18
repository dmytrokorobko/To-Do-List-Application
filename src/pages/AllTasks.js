import { Item } from "../components/Item";
import { useTasks } from "../contexts/TasksContext"

export function AllTasks() {
   const {tasks} = useTasks();
   return (
      <div>
         <h1>All Tasks</h1>
         {tasks.map((task, index) => (
            <div key={index}>
               <Item task={task} />
            </div>
         ))}
      </div>
   )
}