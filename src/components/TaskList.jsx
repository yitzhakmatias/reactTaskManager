import TaskCard from "./TaskCard";
import "./TaskList.css";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      <h2 className="task-list__title">Tasks</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} text={task.text} />
      ))}
    </div>
  );
}

export default TaskList;
