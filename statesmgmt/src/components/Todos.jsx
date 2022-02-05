import { useState } from "react";
import { TodosInput } from "./TodosInput";
import { TodosItem } from "./TodosItem";
import { v4 as uuid } from "uuid";

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const handleClick = (text) => {
    const payload = {
      title: text,
      id: uuid(),
      status: false,
    };
    setTodos([...todos, payload]);
  };

  const deletTodo = (id) => {
    // find this id from Todos Array.
    // change it's `status`
    // setTodos();
  };
  return (
    <div>
      <TodosInput handleClick={handleClick} />
      {todos.map((e) => {
        return (
          <TodosItem
            deletTodo={deletTodo}
            key={e.id}
            title={e.title}
            status={e.status}
            id={e.id}
          />
        );
      })}
    </div>
  );
};
