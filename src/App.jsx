import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="app-container">
        <TaskCard text="Estudiar React" />
        <TaskCard text="Practicar componentes" />
        <TaskCard text="Entender props" />
      </div>
    </div>
  );
}

// Exportamos App para que React pueda renderizarlo desde main.jsx.
export default App;
