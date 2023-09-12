import React from "react";
import "./NuevaTarea.css";
import addIcon from "./iconos/add.ico";
//import { useState } from "react";

function NuevaTarea(props) {
  return (
    <>
      <input
        type="text"
        onChange={(elem) => {
          props.setNewTarea(elem.target.value);
        }}
        className="texto"
        placeholder="Añadir Tarea"
        id="addTask"
      />
      <br />
      <br />
      <button onClick={props.addTarea} className="addTarea ">
        <img src={addIcon} alt="" className="addTarea " /> <br /> Añadir
      </button>
      <br />
      <br />
    </>
  );
}

export default NuevaTarea;
