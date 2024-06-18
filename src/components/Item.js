export function Item({task}) {
   return (
      <div className="todo-item">
         <p className="todo-title">{task.title}</p>
         <div>
            <input type="checkbox" id="completed-task" checked={task.isCompleted} /><label htmlFor="completed-task">Completed?</label>
         </div>
         <ion-icon name="close-circle-outline"></ion-icon>
      </div>
   )
}