import React, { useState } from "react";
import "../styles/Agregar.css";

 function Agregar() {
  const [todos, setTodos] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
    setCompletedCount(completedCount + 1);
  };

  return (
    <div className="container">
      <h1 className="titulo">MIS METASs</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="nueva metas"
        />
        <button onClick={addTodo} className="botoncolor">
          Agregar
        </button>
      </div>

      <div className="boton2">
        <button className="bo">completadas: {completedCount}</button>
        <button className="bo">pendientes: {todos.length}</button>
      </div>
      <div className="caja1">
            <ul className="caja2">
                {todos.map((todo, index) => (
                <li key={index}>
                    {todo.text}
                    <button onClick={() => removeTodo(index)} className="bt" >
                     eliminar
                    </button>
                    <button onClick={() => completeTodo(index) } className="bt">
                    tachar
                    </button>
                </li>
                ))}
            </ul>
        
      </div>
      
    </div>
  );
}
export default Agregar;