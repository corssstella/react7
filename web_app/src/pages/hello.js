import { NavLink } from 'react-router-dom';
import './hello.css'
import useCounterStore from '../stores/store1';
import useLastTodo from '../stores/store2';

const Hello = () => {
  const { count, increment } = useCounterStore();
  const { LastTodo } = useLastTodo();
  return (
    <div class="hello">
      <NavLink to="/todolist" onClick={increment}>
        Hello World!
      </NavLink>
      <h3>Счетчик переходов на страницу TodoList: {count}</h3>
      <h3>Последнее введённое дело: {LastTodo}</h3>
    </div>
  );
}

export default Hello;