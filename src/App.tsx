import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./store/store";
import { ITodo } from "./reducers/todoSlice";

const App = () => {
  const todos: ITodo[] = useSelector((state: RootState) => state.todos);
  // const dispatch = useDispatch();

  return (
    <div>
      <form action="">
        <input className="border" type="text" placeholder="Add title" />
        <button type="submit">Add</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;
