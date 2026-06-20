import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";

const initialTasks = [
  { id: 1, text: "Estudiar React" },
  { id: 2, text: "Practicar componentes" },
  { id: 3, text: "Entender props" },
  { id: 4, text: "Aprender sobre el estado (useState)" },
  { id: 5, text: "Crear un formulario en React" },
];

function App() {
  return (
    <div>
      <Header />
      <div className="app-container">
        <TaskList tasks={initialTasks} />
      </div>
    </div>
  );
}

// Exportamos App para que React pueda renderizarlo desde main.jsx.
export default App;
