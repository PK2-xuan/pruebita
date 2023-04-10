import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const {createTask} = useContext(TaskContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      descripcion,
    });
    setTitle("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
      
      <form className="bg-slate-800 p-5 mb-8
    " action="" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold text-white mb-3" >Añadir tarea  </h1>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="bg-slate-300 p-3 w-full mb-2"
      />

      <textarea
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => setDescripcion(e.target.value)}
        className="bg-slate-300 p-3 w-full mb-2"
        value={descripcion}
        
      ></textarea>

      <button  className="bg-indigo-500 px-3 py-1 text-white hover:bg-blue-400"> Añadir </button>
    </form>
    </div>
  );
}

export default TaskForm;
