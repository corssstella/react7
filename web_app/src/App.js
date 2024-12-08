import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Hello from './pages/hello.js';
import TodoList from './pages/todolist.js';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
