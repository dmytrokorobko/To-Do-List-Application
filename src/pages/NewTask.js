import { useRef } from "react";
import { useTasks } from "../contexts/TasksContext";
import { generateUniqueId } from "../utils/helper";
import { useNavigate } from "react-router-dom";

export function NewTask() {
   const title = useRef('');
   const {setTasks} = useTasks();
   const navigate = useNavigate();

   function handleSubmit(e) {      
      e.preventDefault();
      console.log("Submit pressed");
      if (title.current && title.current.value.length !== '') {
         const newTask = {
            id: generateUniqueId(),
            title: title.current.value,
            isCompleted: false
         };
         setTasks(prev => [
            newTask,
            ...prev
         ]);
         navigate('/');
      } else alert("Something wrong with title. Check again and repeat.");
   }
   return (
      <div className="page-content">
         <h1 className="page-caption">Create New Task</h1>
         <div className="tasks">
            <form className="todo-item create-new-item" onSubmit={handleSubmit}>
               <div className="task-title">
                  <label htmlFor="title">Title:</label>
                  <input type="text" id="title" name="title" placeholder="example: Call my partner" ref={title} required />
               </div>               
               <div>
                  <input type="submit" value="Create" className="btn-submit" onSubmit={handleSubmit} />
               </div>
            </form>
         </div>
      </div>
   )
}