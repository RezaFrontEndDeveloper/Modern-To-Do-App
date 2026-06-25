import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { Todoinput } from "../types/types";
import todoStore from "../store/todoStore";

function ToDosOption({ work, isDone, id }: Todoinput) {
  const handleDeleteItemFromList = todoStore((state) => state.deleteItem);
  const toggleTodo = todoStore((state) => state.toggleTodo);

  return (
    <div
      className={
        isDone
          ? "w-92.5 opacity-[0.33] transition sm:w-125 flex justify-between items-center border border-gray-900 bg-gray-950  px-4 py-2 rounded-xl"
          : "w-92.5 transition hover:bg-gray-800 hover:border-gray-700  sm:w-125 flex justify-between items-center border border-gray-800 bg-gray-900 px-4 py-2 rounded-xl"
      }>
      <input
        checked={isDone}
        onChange={(e) => toggleTodo(id, e.target.checked)}
        type="checkbox"
        className="bg-red-700"
      />
      <h1 className={isDone ? "text-sm line-through text-gray-500" : ""}>
        {work}
      </h1>
      <button onClick={(e) => handleDeleteItemFromList(id)}>
        <LiaTimesSolid className="transition text-2xl p-1 rounded-md hover:bg-red-500 text-white " />
      </button>
    </div>
  );
}

export default ToDosOption;
