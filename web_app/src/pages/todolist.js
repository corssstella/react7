import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './todo.css'

 export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div class="all">
      <h2>Список дел</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => toggleTodo(index)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        const todo = {
          text: e.target.elements.todo.value,
          completed: false
        };
        addTodo(todo);
        e.target.reset();
      }}>
        <input type="text" name="todo" placeholder="Добавить дело" />
        <button type="submit">Добавить</button>
      </form>
        <div class="home">
            <NavLink to="/">
            To home
            </NavLink>
        </div>
    </div>
  );
 }

 export default TodoList;