import { useTasks } from "../contexts/TasksContext";

export function Item({task}) {
   const {tasks, setTasks} = useTasks();

   function handleCheckboxChange(e) {
      setTasks(tasks.map(t => {
         if (t.id === task.id) t.isCompleted = !t.isCompleted;
         return t;
      }))
   }

   function handleDeleteClick(e) {
      e.preventDefault();
      setTasks(tasks.filter(t => t.id !== task.id));
   }
   return (
      <div className="todo-item">
         <p className="todo-title">{task.title}</p>
         <div className="manage">
            <div className="todo-checkbox">
               <input type="checkbox" className="checkbox" checked={task.isCompleted} onChange={handleCheckboxChange} /><span> Completed</span>
            </div>
            <button className="todo-delete" onClick={handleDeleteClick}>
               <ion-icon name="close-circle-outline"></ion-icon>
            </button>
         </div>
      </div>
   )
}