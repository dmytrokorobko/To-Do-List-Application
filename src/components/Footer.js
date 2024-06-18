import { Link } from "react-router-dom";
import { useTasks } from "../contexts/TasksContext";

export function Footer() {
   const {tasks} = useTasks();
   return (
      <footer>
         <div className="copyright">
            <p>&copy;2024 Task 1: Build a To-Do List Application</p>
         </div>
         <div className="tasksInfo">
            <p>All tasks: <strong>{tasks.length}</strong></p>
            <p>Pending tasks: <strong>{tasks.filter(f => f.isCompleted === false).length}</strong></p>
            <p>Completed tasks: <strong>{tasks.filter(f => f.isCompleted === true).length}</strong></p>
         </div>
         <div className="rightSide">
            <Link to="https://github.com/dmytrokorobko/To-Do-List-Application" target="_blank">GitHub Project</Link>
         </div>
      </footer>
   )
}