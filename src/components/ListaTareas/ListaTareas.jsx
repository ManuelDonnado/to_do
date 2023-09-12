import React from "react";
import "./ListaTareas.css";
import icoVisible from "./iconos/expandir.ico";
import deleteIco from "./iconos/delete.ico";

function ListaTareas(props) {
  const { tareas, eliminarTarea } = props;

  return (
    <>
      <div>
        <div>
          <h2 className="container">
            Lista de Tareas por Realizar
            <button onClick={props.ocultarTareas} className="visible">
              <img src={icoVisible} alt="" className="visible" />
            </button>
          </h2>
        </div>
        {props.mostrarTareas ? (
          <>
            <table class="table">
              {tareas.map((tareas) => {
                return (
                  <tr>
                    <td>
                      <h2 key={tareas.id}>{tareas.tarea}</h2>
                    </td>
                    <td>
                      <button
                        onClick={() => eliminarTarea(tareas.id)}
                        className="delete"
                      >
                        <img src={deleteIco} alt="" className="delete" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </>
        ) : (
          <> </>
        )}
      </div>
    </>
  );
}

export default ListaTareas;
