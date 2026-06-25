import React from "react";
import ToDosOption from "./ToDosOption";
import todoStore from "../store/todoStore";

function ShowTodo() {
  const todos = todoStore((state) => state.todos);
  console.log("FIRST ITEM:", todos[0]);

  return (
    <div className="flex flex-col gap-2 w-full  justify-center items-center">
      {todos.map((item) => (
        <ToDosOption
          work={item.work}
          isDone={item.isDone}
          key={item.id}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default ShowTodo;
