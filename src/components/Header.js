import { Link, NavLink } from "react-router-dom";

export function Header() {
   return (
      <header>
         <div className="logo">
            <img src="./images/logo.jpg" alt="logo for pet project" />
         </div>
         <nav>
            <ul>
               <li key="allTasks"><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>All Tasks</NavLink></li>
               <li key="completedTasks"><NavLink to="/completed" className={({isActive}) => isActive ? "active" : ""}>Completed Tasks</NavLink></li>
               <li key="pendingTasks"><NavLink to="/pending" className={({isActive}) => isActive ? "active" : ""}>Pending Tasks</NavLink></li>
            </ul>
         </nav>
         <div className="new-task">
            <Link to="/new" className="btn-new-task">Create New Task</Link>
         </div>
      </header>
   )
}