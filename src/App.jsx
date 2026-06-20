// Importamos el componente Header desde la carpeta components.
import Header from "./components/Header";

// Importamos el componente TaskCard desde la carpeta components.
import TaskCard from "./components/TaskCard";

// App es el componente principal de nuestra aplicación.
function App() {
  return (
    // Este div agrupa los componentes que queremos mostrar en pantalla.
    <div>
      {/* Mostramos el componente Header */}
      <Header />

      {/* Mostramos el componente TaskCard */}
      <TaskCard text="Estudiar React" />
      <TaskCard text="Practicar componentes" />
      <TaskCard text="Entender props" />
    </div>
  );
}

// Exportamos App para que React pueda renderizarlo desde main.jsx.
export default App;
