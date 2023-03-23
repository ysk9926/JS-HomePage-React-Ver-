import { cloneElement, useEffect, useState } from "react";

function Todo() {
  const TODOLISTKEY = "todolist";
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }

    setList((currentarray) => [todo, ...currentarray]);
    setTodo("");
  };
  const save = () => {
    localStorage.setItem(TODOLISTKEY, JSON.stringify(list));
  };
  useEffect(() => {
    save();
  }, [list]);
  useEffect(() => {}, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          type="text"
          placeholder="Todo list"
          onChange={onChange}
        ></input>
        <button>plus</button>
      </form>
    </div>
  );
}

export default Todo;
