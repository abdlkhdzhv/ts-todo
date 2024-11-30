import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./redux/reducerTodo";

function App() {
  const [input, setInput] = useState<string>("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  console.log("Список todos:", todos);

  const addNewTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('')
    }
  }

  const removeTodoItem = (index: number) => {
    console.log("удаляем задачу", index)
    dispatch(removeTodo(index));
  };

  return (
    <div>
      <h1>Умри,но не предавай</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Добавь задачу или я тебя зарежу!"
      />

      <button onClick={addNewTodo}>Добавляю добавляю</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
          <span>{todo.text}</span>
          <button onClick={() => removeTodoItem(index)}>Удалить</button>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
