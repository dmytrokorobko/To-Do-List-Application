export function Item({task}) {
   function handleCheckboxChange(e) {

   }

   function handleDeleteClick(e) {
      e.preventDefault();
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