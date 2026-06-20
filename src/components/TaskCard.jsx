import "./TaskCard.css";

function TaskCard(props) {
  return (
    <div className="task-card">
      <p>{props.text}</p>
    </div>
  );
}

// Exportamos el componente para poder importarlo y usarlo en otros archivos.
export default TaskCard;
