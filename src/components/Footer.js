import { Link } from "react-router-dom";

export function Footer() {
   return (
      <footer>
         <div className="copyright">
            <p>&copy;2024 Task 1: Build a To-Do List Application</p>
         </div>
         <div className="tasksInfo">
            <p>All tasks: {}</p>
            <p>Pending tasks: {}</p>
            <p>Completed tasks: {}</p>
         </div>
         <div className="rightSide">
            <Link to="https://github.com/dmytrokorobko/To-Do-List-Application" target="_blank">GitHub Project</Link>
         </div>
      </footer>
   )
}