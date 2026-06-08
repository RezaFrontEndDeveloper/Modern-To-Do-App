import React, { useContext, useEffect, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { DataContext } from "../App";

function ToDosOption({ work, isDone, id }) {
  const { handleDeleteItemFromList, todos, setTodos } = useContext(DataContext);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div
      className={
        isDone
          ? "w-92.5 opacity-[0.33] transition sm:w-125 flex justify-between items-center border border-gray-900 bg-gray-950  px-4 py-2 rounded-xl"
          : "w-92.5 transition hover:bg-gray-800 hover:border-gray-700  sm:w-125 flex justify-between items-center border border-gray-800 bg-gray-900 px-4 py-2 rounded-xl"
      }>
      <input
        checked={isDone}
        onChange={(e) => {
          setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, isDone: e.target.checked } : todo)));
        }}
        type="checkbox"
        className="bg-red-700"
      />
      <h1 className={isDone ? "text-sm line-through text-gray-500" : ""}>{work}</h1>

      <LiaTimesSolid onClick={() => handleDeleteItemFromList(id)} className="transition text-2xl p-1 rounded-md hover:bg-red-500 text-white " />
    </div>
  );
}

export default ToDosOption;
