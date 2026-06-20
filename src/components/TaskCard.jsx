// Creamos una función llamada TaskCard.
// En React, una función que devuelve JSX puede ser usada como componente.
function TaskCard(props) {
  return (
    // Este div contiene la estructura visual de una tarea.
    <div>
      <p>{props.text}</p>
    </div>
  );
}

// Exportamos el componente para poder importarlo y usarlo en otros archivos.
export default TaskCard;
