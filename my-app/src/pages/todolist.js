import { NavLink } from 'react-router-dom';
import './todo.css'
import useLastTodo from "../stores/store2";
import useTodoList from "../stores/store3";

export const TodoList = () => {
  const { change } = useLastTodo();
  const { todos, setTodos, addTodo } = useTodoList();

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="all">
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
        change(e.target.elements.todo.value);
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
      <div className="home">
        <NavLink to="/">
          To home
        </NavLink>
      </div>
    </div>
  );
}

export default TodoList;