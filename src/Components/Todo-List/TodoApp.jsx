import { useState } from "react";
import { Todo } from "./Todo.jsx";

export const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([])


 

  const handleChange = (e) =>{
    const value = e.target.value;
    setTitle(value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    }
    
    const temp = [...todos]
    temp.unshift(newTodo)

    setTodos(temp)
  }

  const handleUpdate = (id, value) =>{
    const temp = [...todos]
    const item = temp.find(item => item.id === id)
    item.title = value;
    setTodos(temp)
}

const handleDelete = (id) =>{
    const temp = todos.filter(item => item.id != id)
    setTodos(temp)
}



  return (
    <div className="todoContainer">
      <form action="" className="todoCreateForm flex justify-evenly mb-4" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <input onClick={handleSubmit} className="buttonCreate cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit" value="Create todo" />
      </form>

      <div className="todosContainer">
        {
          todos.map((item) => (
            <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
          ))
        }
      </div>
    </div>
  );
};