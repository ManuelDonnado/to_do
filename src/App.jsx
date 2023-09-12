import ListaTareas from "./components/ListaTareas/ListaTareas";
import NuevaTarea from "./components/NuevaTarea/NuevaTarea";
import { useState } from "react";
import "./App.css";

function App(props) {
  const [newTarea, setNewTarea] = useState(true);
  const [tareas, setTareas] = useState([]);
  const [contadorId, setContadorId] = useState(1);
  const [mostrarTareas, setMostrarTareas] = useState(true);

  function ocultarTareas() {
    if (mostrarTareas) {
      setMostrarTareas(false);
    } else {
      setMostrarTareas(true);
    }
  }

  function addTarea() {
    let add = document.querySelector("#addTask");

    const nuevaTarea = {
      id: contadorId,
      tarea: newTarea
    };
    setContadorId(contadorId + 1);
    setTareas([...tareas, nuevaTarea]);
    setNewTarea("");
    add.innerHTML = "";
  }

  function eliminarTarea(id) {
    const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(nuevasTareas);
  }

  return (
    <div className="App">
      <div>
        <br />
        <h1>To Do App</h1>
        <NuevaTarea
          tareas={tareas}
          setNewTarea={setNewTarea}
          addTarea={addTarea}
        />
      </div>

      <div>
        <ListaTareas
          tareas={tareas}
          mostrarTareas={mostrarTareas}
          ocultarTareas={ocultarTareas}
          eliminarTarea={eliminarTarea}
        />
      </div>
    </div>
  );
}

export default App;
