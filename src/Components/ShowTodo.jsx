import React, { useContext } from "react";
import { DataContext } from "../App";
import ToDosOption from "./ToDosOption";

function ShowTodo() {
  const { todos } = useContext(DataContext);

  return (
    <div className="flex flex-col gap-2 w-full  justify-center items-center">
      {todos.map((item) => (
        <ToDosOption work={item.work} isDone={item.isDone} key={item.id} id={item.id} />
      ))}
    </div>
  );
}

export default ShowTodo;
