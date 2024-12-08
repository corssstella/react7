import { NavLink } from 'react-router-dom';
import './hello.css'

function Hello() {
  return (
    <div class="hello">
      <NavLink to="/todolist">
        Hello World!
      </NavLink>
    </div>
  );
}

export default Hello;