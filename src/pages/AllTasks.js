import { Item } from "../components/Item";
import { useTasks } from "../contexts/TasksContext";

export function AllTasks() {
  const { tasks, loading } = useTasks();
  console.log("8. Current tasks in AllTasks:", tasks); // Log the current tasks

  return (
    <div className="page-content">
      <h1 className="page-caption">All Tasks</h1>
      {!loading ? (
        <div className="tasks">
          {tasks.map((task, index) => (
            <div key={index}>
              <Item task={task} />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
